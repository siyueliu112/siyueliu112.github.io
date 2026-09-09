---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

<style>
.page__title {
  display: none;
}
</style>

# 47-853 Special Topics on Combinatorial Optimization: Matroids and Submodular Optimization

## About
This is a graduate-level course on matroids and submodular functions. We will cover the following topics: 1. submodular minimization (e.g., Lovász extension, principal partition), 2. submodular maximization (e.g., greedy, local search, continuous greedy, contention resolution scheme), and 3. matroids (e.g., matroid intersection, matroid union, packing and covering common bases/independent sets, matroid equitability).

## Schedule

**Location**: TEP 5219, MW 9:00-10:50 am

| Lecture | Topic | Content | Lecture Notes |
|:--:|:--|:--|:--|
| **Part I** | **Submodular minimization** |  |  |
| [Lec 1](/files/lecture-notes/Lec 1.pdf) | **Matroid Basics** | Matroid axioms (independent set, basis, circuit, rank, closure); dual matroids; minors and operations.<br>**Readings:**  [Oxley book (1965)](https://doi.org/10.1093/acprof:oso/9780198566946.001.0001). |
| 2 | **Greedy and Matroid Intersection** | Greedy algorithm; strong exchange properties; matroid intersection. <br>**Readings:** [Edmonds (1979)](https://doi.org/10.1016/S0167-5060(08)70817-3); [Lawler (1975)](https://doi.org/10.1007/BF01681329).<br>**Optional:** Weighted matroid intersection. [Frank (1981)](https://doi.org/10.1016/0196-6774(81)90032-8); [Brezovec, Cornuéjols, and Glover (1986)](https://doi.org/10.1007/BF02591988). |
| 3 | **Matroid Union and Principal Partition** | Spanning-tree packing; arboricity; principal partition sequences of submodular functions.<br>**Readings:** [Tutte (1961)](https://doi.org/10.1112/JLMS/S1-36.1.221); [Nash-Williams (1961)](https://doi.org/10.1112/JLMS/S1-36.1.445); [Nash-Williams (1964)](https://doi.org/10.1112/jlms/s1-39.1.12); [Kishi and Kajitani (1969)](https://doi.org/10.1109/TCT.1969.1082966); [Narayanan (1991)](https://doi.org/10.1016/0024-3795(91)90070-D); [Fujishige (2009)](https://doi.org/10.1007/978-3-540-76796-1_7).<br>**Optional:** k-cuts via principal partition sequence. [Barahona (2000)](https://doi.org/10.1016/S0167-6377(99)00071-1); [Ravi and Sinha (2007)](https://doi.org/10.1016/j.ejor.2007.01.040)
| 4 | **Lovász Extension and Submodular Minimization** | Matroid base polytope; polymatroids; submodular functions; Lovász extension; ellipsoid algorithm and submodular minimization; matroid intersection polytope; weight splitting. <br>**Readings:** [Edmonds (1970)](https://doi.org/10.1007/3-540-36478-1_2); [Lovász (1983)](https://doi.org/10.1007/978-3-642-68874-4_10).<br>**Optional:** Combinatorial submodular maximization. [Queyranne (1998)](https://doi.org/10.1007/BF01585863); [Schrijver (2000)](https://doi.org/10.1006/jctb.2000.1989); [Iwata, Fleischer, and Fujishige (2001)](https://doi.org/10.1145/502090.502096). |
| **Part II** | **Submodular maximization** |  |
| 5 | **Greedy** | $1/2$-approximation for monotone submodular maximization under a matroid constraint; $(1-1/e)$-approximation for monotone submodular maximization under a cardinality constraint; uniform-sampling $1/4$-approximation for unconstrained nonmonotone maximization.<br>**Readings:** [Nemhauser, Wolsey, and Fisher (1978)](https://doi.org/10.1007/BF01588971); [Cornuéjols, Fisher, and Nemhauser (1977)](https://doi.org/10.1016/S0167-5060%2808%2970732-5); [Feige, Mirrokni, and Vondrák (2011)](https://doi.org/10.1137/090779346).<br>**Optional:** Optimal double-greedy $1/2$-approximation for unconstrained nonmonotone maximization - [Buchbinder et al. (2015)](https://doi.org/10.1137/130929205). |
| 6 | **Local search** | Local-search $1/2$-approximation for monotone submodular maximization under a matroid constraint; geometric perspective of local search.<br>**Reading:** [Bruggmann and Zenklusen (2019)](https://doi.org/10.1287/moor.2018.0965).<br>**Optional:** Iterated local-search $1/4$-approximation for nonmonotone submodular maximization under a matroid constraint - [Lee et al. (2009)](https://doi.org/10.1145/1536414.1536459). |
| 7 | **Continuous greedy** | Multilinear extension and other concave extensions; optimal continuous-greedy $(1-1/e)$-approximation for monotone maximization under a matroid constraint; measured continuous-greedy $1/e$-approximation for nonmonotone maximization under a matroid constraint.<br>**Readings:** [Călinescu et al. (2011)](https://doi.org/10.1137/080733991); [Feldman, Naor, and Schwartz (2011)](https://doi.org/10.1109/FOCS.2011.46). |
| 8 | **Rounding in the matroid (intersection) polytope** | Pipage rounding and randomized swap rounding for matroids; randomized swap rounding for matroid intersection.<br>**Readings:** [Chekuri, Vondrák, and Zenklusen (2010)](https://doi.org/10.1109/FOCS.2010.60); [Chekuri, Vondrák, and Zenklusen (2011)](https://doi.org/10.1137/1.9781611973082.82). |
| 9 | **Contention resolution scheme (CRS)** | FKG inequality; contention resolution for submodular maximization; simple $(b,1-b)$-balanced and optimal $(1,1-1/e)$-balanced schemes for the matroid polytope.<br>**Reading:** [Chekuri, Vondrák, and Zenklusen (2011)](https://doi.org/10.1145/1993636.1993740). |
| 10 | **Nonoblivious local search / Poisson process** | Nonoblivious local search for monotone submodular maximization; Poisson process for monotone submodular maximization.<br>**Readings:** [Filmus and Ward (2014)](https://doi.org/10.1137/130920277); [Ganz Rozenman et al. (2026)](https://doi.org/10.1145/3798129.3800918).<br>**Optional:** Deterministic algorithm for monotone submodular maximization - [Buchbinder and Feldman (2025)](https://doi.org/10.1137/24M1698122); Poisson process for nonmonotone submodular maximization - [Kulik et al. (2026)](https://arxiv.org/abs/2608.05062). |
| **Part III** | **Topics** |  |
| 11 | **Packing and covering common bases / independent sets** | Arborescence packing; hardness of packing common bases; matroid-intersection coloring.<br>**Readings:** [Edmonds (1973)](https://cir.nii.ac.jp/crid/1573387451139139584); [Bérczi and Schwarcz (2021)](https://doi.org/10.1007/s10107-020-01497-y); [Aharoni and Berger (2006)](https://doi.org/10.1090/S0002-9947-06-03833-5); [Arndt et al. (2026)](https://arxiv.org/abs/2604.03735).<br>**Optional:** Woodall's conjecture on packing dijoins and approximation - [Woodall (1978)](https://doi.org/10.1007/BFb0070416); [Cornuéjols, Liu, and Ravi (2025)](https://doi.org/10.1007/s00493-025-00159-x). |
| 12 | **Matroid equitability** | Gabow's conjecture; matroids are equitable.<br>**Readings:** [Gabow (1976)](https://doi.org/10.1007/BF01580672); [Akrami et al. (2026)](https://doi.org/10.1007/s00493-026-00217-y); [Bérczi et al. (2026)](https://arxiv.org/abs/2608.13983).<br>**Optional:** Gabow's conjecture and White's conjecture on regular matroids - [Bérczi, Mátravölgyi, and Schwarcz (2024)](https://doi.org/10.1145/3618260.3649660). |
| 13 | **Congruency-constrained matroids and submodular minimization** | Delta-modular integer programming and congruency constraints; congruency-constrained submodular minimization.<br>**Readings:** [Artmann, Weismantel, and Zenklusen (2017)](https://doi.org/10.1145/3055399.3055473); [Nägele, Sudakov, and Zenklusen (2019)](https://doi.org/10.1007/s00493-019-3900-1).<br>**Optional:** Congruency-constrained matroid bases - [Liu and Xu (2024)](https://doi.org/10.1007/978-3-031-59835-7_21). |


## Evaluation

You may choose one of the following two options.

| Option | Deliverables | Required discussion |
|:--|:--|:--|
| Problem sets | Two problem sets, each with approximately five questions | Schedule one meeting with the instructor for each problem set and explain the solutions |
| Research report | Choose from an instructor-provided list of research questions, or suggest a topic subject to approval; write a 5-10 page report that summarizes the topic and suggests new research | Schedule one discussion with the instructor |

## AI-use policy

- AI may be used to explore research topics.
- AI may not be used to solve homework problems.
- Every AI-assisted solution or result must be acknowledged.
- The final report and homework must be written by yourself.
