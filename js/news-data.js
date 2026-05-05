/**
 * Shared news data — edit only this file to add or update news items.
 *
 * Array is sorted newest-first (by isoDate).
 * index.html    → renders the first 5 items as a bullet list
 * news.html     → renders all items as a card grid
 * news-item.html → renders a single item looked up by ?id=
 *
 * Fields
 * ──────
 * isoDate      YYYY-MM-DD  used only for ordering — adjust as needed
 * id           URL-safe slug used in news-item.html?id=  (must be unique)
 * category     Short label shown as a tag on the detail page (e.g. "Talk")
 *
 * indexDate    "DD Mon YYYY"  shown as [DD Mon YYYY] in the index list
 * indexContent  HTML string appended after the date span in <li>
 *               (emoji + optional prefix text + <a><strong>…</strong></a>)
 *
 * cardDate     "D Month YYYY"  shown in the news card header
 * cardTitle    plain text title for the card
 * cardText     short description for the card (supports basic HTML like <em>)
 * cardImg      absolute URL to card image; omit or "" for no image
 *
 * banner       absolute URL used as the full-width banner on the detail page
 *              (often the same as cardImg; omit or "" for no banner)
 * fullText     HTML body shown on the detail page — can include <p>, <a>, <em>
 *              Use placeholder text if full content is not yet available.
 *
 * url          primary URL used in indexContent and as card button href
 * cardUrl      (optional) override href for the card "Go to" button
 *              when it differs from url
 *
 * How to add a new item
 * ─────────────────────
 * 1. Copy the template below as a starting point.
 * 2. Choose a unique id slug (lowercase, hyphens only).
 * 3. Insert the new object at the TOP of the array (newest first).
 * 4. Save — index.html, news.html, and news-item.html all update automatically.
 *
 * Template:
 * {
 *   isoDate: "2026-03-15",
 *   id: "my-event-2026",
 *   category: "Talk",
 *   indexDate: "15 Mar 2026",
 *   indexContent: `🎤 <a href="https://example.com" target="_blank" rel="noopener"><strong>Event Title</strong></a>`,
 *   cardDate: "15 March 2026",
 *   cardTitle: "Event Title",
 *   cardText: "A short description for the news card.",
 *   cardImg: "https://example.com/photo.jpg",
 *   banner: "https://example.com/photo.jpg",
 *   fullText: `<p>Full detail text goes here. Can include <a href="#">links</a>.</p>`,
 *   url: "https://example.com",
 * },
 */
const NEWS_ITEMS = [
  {
    isoDate: "2025-11-10",
    id: "keynote-sigmm-europe-2025",
    category: "Talk",
    indexDate: "28 Oct 2025",
    indexContent: `🎤 Keynote at the <a href="https://sites.google.com/view/sigmm-eu-chapter/events/chapter-kick-off-meeting" target="_blank" rel="noopener"><strong>ACM SIGMM Europe Chapter Symposium</strong></a>`,
    cardDate: "10 November 2025",
    cardTitle: "Keynote at the ACM SIGMM Europe Chapter Symposium",
    cardText: `Title: <em>From Individual Immersion to Shared Experiences in Social XR.</em> Silvia outlined her research journey from modelling individual user behaviour in immersive spaces to designing and evaluating social XR experiences.`,
    cardImg: "https://static.wixstatic.com/media/6e11d6_a59d4c3bafba40b48bee78805e7ac76e~mv2.jpg/v1/crop/x_4,y_0,w_2281,h_2289/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1761309943277_edited_edited.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_a59d4c3bafba40b48bee78805e7ac76e~mv2.jpg/v1/crop/x_4,y_0,w_2281,h_2289/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1761309943277_edited_edited.jpg",
    fullText: `<p>Silvia delivered the keynote talk <em>From Individual Immersion to Shared Experiences in Social XR</em> at the kick-off meeting of the ACM SIGMM Europe Chapter Symposium.</p>
<p>The talk traced her research journey: starting from understanding individual user behaviour in immersive media systems — including gaze, motion, and quality of experience — through to the design and evaluation of multi-user social XR environments. Silvia discussed the challenges of scaling immersive experiences from single-user studies to shared, collaborative social spaces, and presented findings from several recent projects conducted in the DIS group at CWI Amsterdam.</p>
<p>The ACM SIGMM Europe Chapter Symposium brought together researchers from across Europe working in multimedia systems, human-computer interaction, and immersive media.</p>`,
    url: "https://sites.google.com/view/sigmm-eu-chapter/events/chapter-kick-off-meeting",
  },
  {
    isoDate: "2025-10-09",
    id: "surf-tech-trends-2025",
    category: "Media",
    indexDate: "09 Oct 2025",
    indexContent: `📑 Silvia participated in the <a href="https://www.dis.cwi.nl/news/2025-10-09-surf-tech-trends-how-cwi-contributes-to-the-use-of-xr-for-education-and-research/" target="_blank" rel="noopener"><strong>SURF Tech Report</strong></a>`,
    cardDate: "8 October 2025",
    cardTitle: "SURF Tech Trends: how CWI contributes to the use of XR for education and research",
    cardText: "The SURF Tech Trends report is a bi-annual report providing insight into the most important digital trends. Immersive technology – or eXtended Reality – was one of the topics covered.",
    cardImg: "https://static.wixstatic.com/media/6e11d6_ff49209dbcd64913822b60ca64c7281d~mv2.jpg/v1/crop/x_1,y_0,w_498,h_500/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1759935219141_edited.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_ff49209dbcd64913822b60ca64c7281d~mv2.jpg/v1/crop/x_1,y_0,w_498,h_500/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1759935219141_edited.jpg",
    fullText: `<p>Silvia Rossi contributed to the SURF Tech Trends report, a bi-annual publication by SURF — the collaborative organisation for IT in Dutch education and research — that identifies and analyses the most significant digital trends shaping higher education and academic research.</p>
<p>Immersive technology, or eXtended Reality (XR), was one of the focal topics of the edition. The report explores how institutions are beginning to adopt VR and AR for teaching, collaboration, and research infrastructure, and how CWI's work in immersive multimedia systems contributes to that broader landscape.</p>
<p>Silvia's research on user behaviour in social XR and scalable immersive systems was highlighted as an example of how fundamental research can underpin practical applications in education and beyond.</p>`,
    url: "https://www.dis.cwi.nl/news/2025-10-09-surf-tech-trends-how-cwi-contributes-to-the-use-of-xr-for-education-and-research/",
    cardUrl: "https://www.silviarossi.info/copy-of-dis-researcher-co-organise-mm",
  },
  {
    isoDate: "2025-10-08",
    id: "mmsys-2025-south-africa",
    category: "Service",
    indexDate: "08 Oct 2025",
    indexContent: `🗂️ <a href="https://www.silviarossi.info/copy-of-dis-researchers-organise-mmve" target="_blank" rel="noopener"><strong>DIS Researcher co-organises ACM MMSys 2025 in South Africa</strong></a>`,
    cardDate: "8 October 2025",
    cardTitle: "DIS Researcher co-organises ACM MMSys 2025 in South Africa",
    cardText: "The international ACM conference Multimedia Systems (MMSys) 2025, a premier conference on multimedia systems, was successfully co-organised by Silvia Rossi, researcher of the DIS group.",
    cardImg: "https://static.wixstatic.com/media/6e11d6_f17fa66d05b34cfb931084a0a1c3a10a~mv2.jpg/v1/crop/x_5,y_0,w_2990,h_3000/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SU%20Engineering%20ACM%20Conf%20April%202025-98_ed.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_f17fa66d05b34cfb931084a0a1c3a10a~mv2.jpg/v1/crop/x_5,y_0,w_2990,h_3000/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SU%20Engineering%20ACM%20Conf%20April%202025-98_ed.jpg",
    fullText: `<p>Silvia Rossi served as co-organiser of ACM MMSys 2025, the 16th ACM International Conference on Multimedia Systems, held in Stellenbosch, South Africa. MMSys is a premier venue for research on multimedia systems, covering streaming, immersive media, quality of experience, and networked media applications.</p>
<p>The conference brought together researchers and practitioners from around the world to present and discuss advances in multimedia systems design and evaluation. Silvia contributed to the organisation of the programme, including paper reviewing coordination and the co-located MMVE workshop on immersive and interactive media.</p>`,
    url: "https://www.silviarossi.info/copy-of-dis-researchers-organise-mmve",
  },
  {
    isoDate: "2025-10-06",
    id: "qomex-best-paper-2025",
    category: "Award",
    indexDate: "06 Oct 2025",
    indexContent: `🏆 <a href="https://www.dis.cwi.nl/news/2025-10-10-new-way-to-measure-group-dynamics-in-extended-reality-xr-dis-wins-the-best-paper-award/" target="_blank" rel="noopener"><strong>Best paper award at QoMEX 2025</strong></a>`,
    cardDate: "6 October 2025",
    cardTitle: "Best paper award at QoMEX 2025",
    cardText: "New way to measure group dynamics in Extended Reality (XR) — DIS wins the best paper award at the Quality of Multimedia Experience (QoMEX) 2025 conference.",
    cardImg: "",
    banner: "",
    fullText: `<p>Research from the Distributed and Interactive Systems (DIS) group at CWI won the <strong>Best Paper Award</strong> at QoMEX 2025, the International Conference on Quality of Multimedia Experience.</p>
<p>The awarded paper introduces a new method for measuring group dynamics in Extended Reality (XR) environments — addressing a key challenge in social XR research where conventional individual-level metrics fail to capture the collective experience of co-present users.</p>
<p>The work contributes to Silvia's broader research agenda on understanding and evaluating social behaviour in immersive multi-user systems, with implications for the design of scalable and engaging social XR platforms.</p>`,
    url: "https://www.dis.cwi.nl/news/2025-10-10-new-way-to-measure-group-dynamics-in-extended-reality-xr-dis-wins-the-best-paper-award/",
  },
  {
    isoDate: "2025-06-01",
    id: "sigmm-director-2025",
    category: "Service",
    indexDate: "01 Jun 2025",
    indexContent: `🌟 Elected <a href="https://records.sigmm.org/" target="_blank" rel="noopener"><strong>ACM SIGMM Director of Conferences</strong></a>`,
    cardDate: "1 June 2025",
    cardTitle: "Elected ACM SIGMM Director of Conferences",
    cardText: "Silvia Rossi was elected as ACM SIGMM Director of Conferences.",
    cardImg: "",
    banner: "",
    fullText: `<p>Silvia Rossi was elected as <strong>Director of Conferences</strong> for ACM SIGMM, the Special Interest Group on Multimedia within the Association for Computing Machinery.</p>
<p>In this role, Silvia oversees the organisation and coordination of the flagship ACM SIGMM conferences, including ACM Multimedia (MM) and ACM MMSys, supporting the global multimedia research community. The position reflects her active involvement in the research community and her commitment to fostering high-quality scientific exchange in multimedia systems and interactive media.</p>`,
    url: "https://records.sigmm.org/",
  },
  {
    isoDate: "2025-03-31",
    id: "mmve-paper-2025",
    category: "Publication",
    indexDate: "31 Mar 2025",
    indexContent: `🗣️ <a href="https://dl.acm.org/doi/10.1145/3712677.3720460" target="_blank" rel="noopener"><strong>Paper presented at MMVE 2025</strong></a>`,
    cardDate: "8 October 2025",
    cardTitle: "New paper: Exploring Entropy-Based Solutions for Trajectory Prediction in VR",
    cardText: "Varun Pradhan, Silvia Rossi, and Pablo Cesar. Published in the Proceedings of MMVE '25, co-located with ACM MMSys 2025. DOI: 10.1145/3712677.3720460",
    cardImg: "https://static.wixstatic.com/media/6e11d6_1f4cd59bca834acfb8643d699b6a5012~mv2.jpg/v1/crop/x_0,y_31,w_922,h_925/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-10-08%20at%2015_edited_edite.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_1f4cd59bca834acfb8643d699b6a5012~mv2.jpg/v1/crop/x_0,y_31,w_922,h_925/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-10-08%20at%2015_edited_edite.jpg",
    fullText: `<p>Varun Pradhan, Silvia Rossi, and Pablo Cesar. <em>Exploring Entropy-Based Solutions for Trajectory Prediction in VR.</em> In Proceedings of the Workshop on Immersive Mixed and Virtual Environment Systems (MMVE '25), co-located with ACM MMSys 2025, Stellenbosch, South Africa.</p>
<p><strong>DOI:</strong> <a href="https://dl.acm.org/doi/10.1145/3712677.3720460" target="_blank" rel="noopener">10.1145/3712677.3720460</a></p>
<p>This paper investigates entropy-based methods for predicting user trajectories in virtual reality environments — a key component for optimising content delivery and reducing bandwidth in immersive streaming systems. By modelling the uncertainty in user movement, the proposed approach improves prediction accuracy compared to deterministic baselines, with implications for adaptive streaming and prefetching strategies in 6-DoF VR systems.</p>`,
    url: "https://dl.acm.org/doi/10.1145/3712677.3720460",
  },
  {
    isoDate: "2025-02-03",
    id: "visual-saliency-2025",
    category: "Publication",
    indexDate: "03 Feb 2025",
    indexContent: `📄 <a href="https://ieeexplore.ieee.org/abstract/document/10922128" target="_blank" rel="noopener"><strong>New journal paper: Visual Saliency for Dynamic Point Clouds</strong></a>`,
    cardDate: "3 February 2025",
    cardTitle: "New journal paper: Visual Saliency for Dynamic Point Clouds",
    cardText: `Xuemei Zhou, Irene Viola, Silvia Rossi, Pablo Cesar. "Comparison of Visual Saliency for Dynamic Point Clouds: Task-free vs. Task-dependent." IEEE TVCG 2025. Presented at IEEE VR 2025.`,
    cardImg: "https://static.wixstatic.com/media/6e11d6_ee992a8ece524d01b390fb1c47bf7b00~mv2.jpg/v1/crop/x_1,y_0,w_897,h_900/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dynamic_task_free_task_depedent_edited_j.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_ee992a8ece524d01b390fb1c47bf7b00~mv2.jpg/v1/crop/x_1,y_0,w_897,h_900/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dynamic_task_free_task_depedent_edited_j.jpg",
    fullText: `<p>Xuemei Zhou, Irene Viola, Silvia Rossi, Pablo Cesar. <em>Comparison of Visual Saliency for Dynamic Point Clouds: Task-free vs. Task-dependent.</em> IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025. Presented at IEEE VR 2025.</p>
<p><strong>DOI:</strong> <a href="https://ieeexplore.ieee.org/abstract/document/10922128" target="_blank" rel="noopener">10.1109/TVCG.2025.10922128</a></p>
<p>This journal paper presents a systematic comparison of visual saliency in dynamic point cloud content under two experimental conditions: task-free viewing, where participants freely explore the scene, and task-dependent viewing, where participants perform a specific visual task. The study reveals meaningful differences in gaze behaviour between conditions, with implications for the design of perceptually optimised compression and rendering pipelines for volumetric video. The work was presented at IEEE VR 2025.</p>`,
    url: "https://ieeexplore.ieee.org/abstract/document/10922128",
  },
  {
    isoDate: "2024-10-31",
    id: "clustering-xr-2024",
    category: "Publication",
    indexDate: "31 Oct 2024",
    indexContent: `📄 <a href="https://dl.acm.org/doi/10.1145/3701734" target="_blank" rel="noopener"><strong>New journal paper: Clustering Approach to Unveil User Similarities in 6-DoF XR</strong></a>`,
    cardDate: "31 October 2024",
    cardTitle: "New journal paper: Clustering Approach to Unveil User Similarities in 6-DoF XR",
    cardText: "Silvia Rossi, Irene Viola, Laura Toni, Pablo Cesar. ACM TOMM special issue MMSys 2023. DOI: 10.1145/3701734",
    cardImg: "https://static.wixstatic.com/media/6e11d6_23c4ad070468470d9045a9b73d7c841f~mv2.jpg/v1/crop/x_133,y_116,w_452,h_453/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/TOMM2024_websitenews_edited.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_23c4ad070468470d9045a9b73d7c841f~mv2.jpg/v1/crop/x_133,y_116,w_452,h_453/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/TOMM2024_websitenews_edited.jpg",
    fullText: `<p>Silvia Rossi, Irene Viola, Laura Toni, Pablo Cesar. <em>A Clustering Approach to Unveil User Similarities in 6-DoF XR.</em> ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM), special issue of MMSys 2023.</p>
<p><strong>DOI:</strong> <a href="https://dl.acm.org/doi/10.1145/3701734" target="_blank" rel="noopener">10.1145/3701734</a></p>
<p>This paper applies unsupervised clustering to characterise and group users based on their navigation behaviour in six-degrees-of-freedom (6-DoF) extended reality environments. By identifying user archetypes — patterns of movement and attention that recur across individuals — the work provides a data-driven basis for personalising content delivery and adaptive streaming in immersive systems. The findings have direct applications for viewport prediction and quality-of-experience optimisation in volumetric media streaming.</p>`,
    url: "https://dl.acm.org/doi/10.1145/3701734",
  },
  {
    isoDate: "2024-10-30",
    id: "vr2gather-2024",
    category: "Publication",
    indexDate: "31 Oct 2024",
    indexContent: `📄 <a href="https://dl.acm.org/doi/10.1145/3664647.3685515" target="_blank" rel="noopener"><strong>New paper: Open-Sourcing VR2Gather at ACM MM 2024</strong></a>`,
    cardDate: "31 October 2024",
    cardTitle: "New paper: Open-Sourcing VR2Gather at ACM MM 2024",
    cardText: `Jack Jansen, Thomas Röggla, Silvia Rossi, Irene Viola, Pablo Cesar. "Open-Sourcing VR2Gather: A Collaborative Social VR System." ACM MM 2024. DOI: 10.1145/3664647.3685515`,
    cardImg: "https://static.wixstatic.com/media/6e11d6_bc64c112f74f46f2959d68c696cfa717~mv2.jpg/v1/crop/x_0,y_44,w_302,h_303/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3664647_3685515_key.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_bc64c112f74f46f2959d68c696cfa717~mv2.jpg/v1/crop/x_0,y_44,w_302,h_303/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3664647_3685515_key.jpg",
    fullText: `<p>Jack Jansen, Thomas Röggla, Silvia Rossi, Irene Viola, Pablo Cesar. <em>Open-Sourcing VR2Gather: A Collaborative Social VR System.</em> In Proceedings of ACM Multimedia 2024 (ACM MM '24).</p>
<p><strong>DOI:</strong> <a href="https://dl.acm.org/doi/10.1145/3664647.3685515" target="_blank" rel="noopener">10.1145/3664647.3685515</a></p>
<p>This paper presents the open-source release of VR2Gather, a collaborative social VR platform developed at CWI Amsterdam. VR2Gather supports real-time multi-user interaction in shared virtual environments using volumetric video representations of participants, enabling natural social presence without relying on avatars.</p>
<p>The paper describes the system architecture, the challenges of streaming and synchronising volumetric content in real time across participants, and the open-source infrastructure that allows the research community to build on, reproduce, and extend the platform. The release represents a significant contribution to reproducibility in immersive media research.</p>`,
    url: "https://dl.acm.org/doi/10.1145/3664647.3685515",
  },
  {
    isoDate: "2024-01-05",
    id: "academic-positions-2024",
    category: "Media",
    indexDate: "05 Jan 2024",
    indexContent: `🎙️ <a href="https://academicpositions.com/story/crafting-algorithms-to-optimise-3d-experience" target="_blank" rel="noopener"><strong>Understanding Users to Optimise 3D Experiences</strong></a>`,
    cardDate: "5 January 2024",
    cardTitle: "Understanding Users to Optimise 3D Experiences",
    cardText: "Interview on Academic Positions on Silvia's research into virtual reality, user behaviour, and optimising immersive media systems for real-world scale.",
    cardImg: "https://static.wixstatic.com/media/6e11d6_3b314c703bdb41e891793faa49cc031e~mv2.jpg/v1/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MK3_6824_JPG.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_3b314c703bdb41e891793faa49cc031e~mv2.jpg/v1/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MK3_6824_JPG.jpg",
    fullText: `<p>Academic Positions published an interview with Silvia Rossi on her research into virtual reality, user behaviour, and the challenge of optimising immersive media systems for real-world scale.</p>
<p>In the interview, Silvia discusses how understanding the way individual users move, look, and interact in 3D virtual environments is key to designing efficient systems — from adaptive streaming pipelines that predict what content to pre-load, to social VR platforms that can support many simultaneous users without sacrificing quality of experience.</p>
<p>She also reflects on the path from PhD research at University College London to her current role at CWI Amsterdam, and the importance of user studies as a foundation for systems research in immersive media.</p>`,
    url: "https://academicpositions.com/story/crafting-algorithms-to-optimise-3d-experience",
  },
  {
    isoDate: "2023-11-27",
    id: "sigmm-award-2023",
    category: "Award",
    indexDate: "27 Nov 2023",
    indexContent: `🏆 <a href="https://www.ucl.ac.uk/electronic-electrical-engineering/news/2023/nov/ucl-alumni-receives-prestigious-sigmm-award" target="_blank" rel="noopener"><strong>UCL alumni receives prestigious SIGMM award</strong></a>`,
    cardDate: "27 November 2023",
    cardTitle: "UCL alumni receives prestigious SIGMM award",
    cardText: "Silvia Rossi received the ACM SIGMM Award for Outstanding PhD Thesis, presented at ACM MM 2023 in Ottawa, Canada.",
    cardImg: "https://static.wixstatic.com/media/6e11d6_6b782bbf7fb74ce59af680a9a493a2f8~mv2.jpg/v1/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2023_sigmmaward_JPG.jpg",
    banner: "https://static.wixstatic.com/media/6e11d6_6b782bbf7fb74ce59af680a9a493a2f8~mv2.jpg/v1/fill/w_294,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2023_sigmmaward_JPG.jpg",
    fullText: `<p>Silvia Rossi received the <strong>ACM SIGMM Award for Outstanding PhD Thesis</strong>, presented at the ACM International Conference on Multimedia (ACM MM 2023) in Ottawa, Canada.</p>
<p>The award is given annually by ACM SIGMM to recognise exceptional doctoral research in the field of multimedia. Silvia's PhD thesis, completed at University College London (UCL) under the supervision of Prof. Laura Toni, was recognised for its contributions to understanding user behaviour in immersive media systems and applying those insights to adaptive content delivery.</p>
<p>The recognition was also covered by UCL's Department of Electronic and Electrical Engineering, highlighting the impact of the research on both the academic multimedia community and the broader field of immersive media systems.</p>`,
    url: "https://www.ucl.ac.uk/electronic-electrical-engineering/news/2023/nov/ucl-alumni-receives-prestigious-sigmm-award",
  },
  {
    isoDate: "2023-10-19",
    id: "vr-space-2023",
    category: "Media",
    indexDate: "19 Oct 2023",
    indexContent: `🎙️ <a href="https://www.cwi.nl/en/stories/how-do-we-use-space-in-vr/" target="_blank" rel="noopener"><strong>How do we use space in VR?</strong></a>`,
    cardDate: "19 October 2023",
    cardTitle: "How do we use space in VR?",
    cardText: "CWI interview on personal space and navigation in social VR, discussing Silvia's findings on user behaviour in immersive multi-user environments.",
    cardImg: "assets/img/news/2023-10-19-how-do-we-use-space-in-vr.jpg",
    banner: "assets/img/news/2023-10-19-how-do-we-use-space-in-vr.jpg",
    fullText: `<p>CWI Amsterdam published an interview with Silvia Rossi exploring how people use and perceive space in virtual reality environments — particularly in social VR settings where multiple users share the same virtual space.</p>
<p>The interview discusses findings from Silvia's research on proxemics (personal space) and navigation behaviour in immersive multi-user environments. Key questions include: do people maintain the same social distances in VR as in physical spaces? How do users navigate around each other? And what does this mean for the design of social VR platforms?</p>
<p>The research uses data collected from user studies in VR2Gather, CWI's social VR platform, and contributes to a growing body of work on how social norms and spatial behaviour transfer — or adapt — when people move from physical to virtual environments.</p>`,
    url: "https://www.cwi.nl/en/stories/how-do-we-use-space-in-vr/",
  },
  {
    isoDate: "2023-10-17",
    id: "dutch-media-week-2023",
    category: "Media",
    indexDate: "17 October 2023",
    indexContent: `🎙️ <a href="https://www.dis.cwi.nl/news/2023-10-17-cwi-researcher-silvia-rossi-invited-to-the-dutch-media-week/" target="_blank" rel="noopener"><strong>Silvia Rossi Invited to the Dutch Media Week</strong></a>`,
    cardDate: "17 October 2023",
    cardTitle: "Silvia Rossi Invited to the Dutch Media Week",
    cardText: "During the Dutch Media Week, postdoctoral researcher Silvia Rossi was one of the speakers at the program Cross Media Café on Spatial computing. She brought a scientific perspective talking about her work on understanding user behaviour in XR.",
    cardImg: "assets/img/news/2023-10-17-cwi-researcher-silvia-rossi-invited-to-the-dutch-media-week_cover.jpg",
    banner: "assets/img/news/2023-10-17-cwi-researcher-silvia-rossi-invited-to-the-dutch-media-week.jpg",
    fullText: `<p>CWI postdoctoral researcher Silvia Rossi was recently one of the invited speakers at the program Cross Media Cafè on October 3, 2023 during the Dutch Media week. The Cross Media Café is organised by Sound & Vision and Media Perspectives and aims at showcasing the latest developments in the field of media, technology and innovation for media professionals. She brought a scientific perspective talking about her work on understanding user behaviour in XR.</p>
    <p>The focus of Cross Media Cafè was ‘spatial computing’, a new bridge between the physical and virtual world. By merging the digital and physical dimensions, spatial computing has opened the gate to a futuristic world of virtual interaction and immersive experiences. This topic was discussed by Monique van Dusseldorp together with 6 experts and pioneers in the field who shared their insights on the vast potential and transformative power of spatial computing. Among these invited speakers, there was Silvia Rossi, postdoctoral researcher in the Distributed and Interactive System (DIS) group. She took part in the first round of discussions together with Gabriele Romagnoli (Head of Business at ShapesXR) and Benjamin de Wit (founder VRDays Europe and organizer Immersive Tech Week).</p>`,
    url: "https://www.dis.cwi.nl/news/2023-10-17-cwi-researcher-silvia-rossi-invited-to-the-dutch-media-week/",
  },
  {
    isoDate: "2023-05-25",
    id: "spring-school-2023",
    category: "Service",
    indexDate: "25 May 2023",
    indexContent: `🎙️ <a href="https://www.dis.cwi.nl/news/2023-05-25-dis-organises-sping-school-on-social-xr/" target="_blank" rel="noopener"><strong>Silvia as Organises of the Spring School on Social XR</strong></a>`,
    cardDate: "25 May 2023",
    cardTitle: "Spring School on Social XR 2023",
    cardText: "As part of the research semester program  of CWI, the Distributed and Interactive Systems group (DIS) organized the Spring School on Social XR.",
    cardImg: "assets/img/news/2023-05-25-spring-school-on-social-xr.jpg",
    banner: "assets/img/news/2023-05-25-spring-school-on-social-xr.jpg",
    fullText: `<p>As part of the research semester program  of CWI, the Distributed and Interactive Systems group (DIS) organized the Spring School on Social XR. The event took place on March 13th – 17th 2023, and attracted 33 students from different disciplines (technology, social sciences and humanities). The program included 18 lectures, 4 of them open, by 20 instructors. The event was organized by Irene Viola, Silvia Rossi, and Pablo Cesar from CWI; and Omar Niamut from TNO. It was co-sponsored by ACM SIGMM , the ACM Special Interest Group on Multimedia, and The Netherlands Institute for Sound and Vision.</p>
    <p>“The future of media communication is immersive, and will empower sectors such as cultural heritage, education, manufacturing, and provide a climate-neutral alternative to travelingin the European Green Deal”. With such a vision in mind, the organization committee created a holistic program around the research topic of Social XR. The program included keynotes and workshops, where prominent scientists in the field shared their knowledge with students and triggered meaningful conversations and exchanges.</p>`,
    url: "https://www.dis.cwi.nl/news/2023-05-25-dis-organises-sping-school-on-social-xr/",
  },
];
