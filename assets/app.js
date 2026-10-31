'use strict';
(() => {
  const q = selector => document.querySelector(selector);
  const topicOrder = ['Packing and Covering', 'Approximation Algorithms', 'Matroid Theory', 'Integer Programming'];
  let view = new URLSearchParams(location.search).get('view') === 'topic' ? 'topic' : 'year';
  let papers = [];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = url => /^https?:\/\//.test(url) ? escape(url) : '#';
  const authorList = paper => {
    const authors = [...paper.authors];
    if (!authors.some(author => author.name === 'Siyue Liu')) authors.push({name:'Siyue Liu'});
    const surname = author => author.name.trim().split(/\s+/).pop();
    authors.sort((a,b) => surname(a).localeCompare(surname(b), 'en', {sensitivity:'base'}) || a.name.localeCompare(b.name, 'en', {sensitivity:'base'}));
    return authors.map(author => author.name === 'Siyue Liu'
      ? `<span class="self-author">${escape(author.name)}</span>`
      : `<a href="${safeUrl(author.url)}" target="_blank" rel="noopener">${escape(author.name)}</a>`).join(', ');
  };
  const versionLabel = version => version.category === 'Journal' ? '[J]' : version.category === 'Conference' ? '[C]' : 'Preprint';
  const venueRow = version => `<div class="venue"><span class="venue-version ${version.category.toLowerCase()}" aria-label="${escape(version.category)}">${versionLabel(version)}</span><div class="venue-detail"><a href="${safeUrl(version.url)}" target="_blank" rel="noopener">${escape(version.category === 'Preprint' ? `Preprint, ${version.year}` : version.venue)}<span class="sr-only"> (opens in a new tab)</span></a>${version.award ? `<span class="award">☆ ${escape(version.award)}</span>` : ''}</div></div>`;
  const card = paper => `<article class="paper" data-paper-id="${escape(paper.id)}" data-paper-number="${paper.number}"><span class="paper-number">${paper.number}.</span><div><h3><a class="paper-title-link" href="${safeUrl(paper.arxiv_url || paper.versions[0].url)}" target="_blank" rel="noopener">${escape(paper.title)}<span class="sr-only"> (opens in a new tab)</span></a></h3><p class="authors">${authorList(paper)}</p><div class="venue-list" aria-label="Publication versions">${paper.versions.map(venueRow).join('')}</div></div></article>`;
  function updateUrl() {
    const next = new URL(location.href);
    next.search = '';
    if (view === 'topic') next.searchParams.set('view', 'topic');
    history.replaceState(null, '', next);
  }
  const groupingYear = paper => paper.group_year ?? paper.year;
  function render() {
    q('#publications').dataset.view = view;
    document.querySelectorAll('button[data-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    // The bibliography file is the single master order; grouping never reorders its entries.
    const ordered = papers;
    const groups = view === 'year'
      ? [...new Set(ordered.map(groupingYear))].sort((a,b) => b-a)
      : topicOrder.filter(topic => ordered.some(paper => paper.topic === topic));
    q('#publications').innerHTML = groups.map((group,index) => {
      const members = ordered.filter(paper => view === 'year' ? groupingYear(paper) === group : paper.topic === group);
      return `<section class="publication-group" aria-labelledby="group-${index}"><div class="group-heading"><h2 id="group-${index}">${escape(group)}</h2><span class="group-rule" aria-hidden="true"></span></div>${members.map(card).join('')}</section>`;
    }).join('');
  }
  document.querySelectorAll('button[data-view]').forEach(button => button.addEventListener('click', () => { view=button.dataset.view; updateUrl(); render(); }));
  addEventListener('popstate', () => {view=new URLSearchParams(location.search).get('view')==='topic'?'topic':'year';render();});
  fetch(document.querySelector('script[data-publications]').dataset.publications).then(response => {if(!response.ok) throw new Error('Unable to load bibliography');return response.json();}).then(data => {papers=data.map((paper,index)=>({...paper,number:index+1}));updateUrl();render();}).catch(() => {q('#publications').innerHTML='<div class="empty-state"><h2>Bibliography unavailable</h2><p>Please reload this page.</p></div>';});
})();
