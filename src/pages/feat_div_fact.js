import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BigText, Caption, Paragraph, Button } from '@/components/home/common';

import atomic_mistakes from '@/img/resources/atomic_mistakes.png';

export default function ProjectPage() {
  const div_fact_thumbnail = require("@/img/resources/arxiv_thumbnails/div_fact_thumb.png").default.src;
  const git_thumbnail = require("@/img/resources/git_thumbnails/auc_git.png").default.src;
  const equity_thumbnail = require("@/img/resources/equity_fundamental.png").default.src;
  const auprc_optim = require("@/img/resources/auc_optim_auprc.png").default.src;
  const subpop_thumbnail = require("@/img/resources/subpop_thumbnail.png").default.src;


  return (
    <section className='bg-white min-h-screen pt-24 sm:pt-32'>
      <Head>
        <title>A New Tool for Evaluating Health Equity in Academic Journals; the Diversity Factor</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="bg-white container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <BigText> A New Tool for Evaluating Health Equity in Academic Journals; the Diversity Factor </BigText>
          <p className="my-5 text-base text-slate-800">
            {/* Authors with hover-over tooltips for affiliations */}
            <span className="relative cursor-pointer group">Jack Gallifant<sup>1</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Intensive Care, Imperial College London NHS Trust, London, United Kingdom
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Joe Zhang<sup>2</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, United Kingdom
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Stephen Whebell<sup>3</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Intensive Care Unit, Townsville University Hospital, Townsville, Queensland, Australia
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Justin Quion<sup>4</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                University of the East Ramon Magsaysay Memorial Medical Center, Quezon City, Philippines
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Braiam Escobar<sup>5</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Escuela de Ingeniería de Antioquia, Envigado, Colombia
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Judy Gichoya<sup>6</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                School of Medicine, Emory University, Atlanta, Georgia, United States of America
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Karen Herrera<sup>7</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Faculty of Medicine, Military Hospital, Managua, Nicaragua
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Ruxana Jina<sup>8,9</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                The Epidemiology and Surveillance Section, National Institute for Occupational Health, National Health Laboratory Services, Gauteng Region, South Africa; The Wits School of Public Health, Faculty of Health Sciences, University of the Witwatersrand, Johannesburg, South Africa
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Swathikan Chidambaram<sup>10</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Surgery and Cancer, Imperial College London, London, United Kingdom
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Abha Mehndiratta<sup>11</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Center for Global Development, Washington, DC, United States of America
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Richard Kimera<sup>12,13</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Information Technology, Faculty of Computing and Informatics, Mbarara University of Science and Technology, Mbarara, Uganda; Department of Advanced Convergence, Handong Global University, Pohang-si, South Korea
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Alvin Marcelo<sup>14</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                University of the Philippines Manila, Manila, Philippines
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Portia Grace Fernandez-Marcelo<sup>15</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Family and Community Medicine, College of Medicine, University of the Philippines Manila, Manila, Philippines
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Juan Sebastian Osorio<sup>16</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                ScienteLab, Bogota, Colombia
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Cleva Villanueva<sup>17</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Instituto Politecnico Nacional, Escuela Superior de Medicina, Mexico City, Mexico
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Lama Nazer<sup>18</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Pharmacy, King Hussein Cancer Center, Amman, Jordan
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Irene Dankwa-Mullan<sup>19,20</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Merative, & Center for AI, Research, and Evaluation, IBM Watson Health, Cambridge, Massachusetts, United States of America; Department of Health Policy and Management, Milken Institute School of Public Health, George Washington University, Washington, DC, United States of America
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Leo Anthony Celi<sup>21,22,23</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Massachusetts Institute of Technology, Laboratory for Computational Physiology, Cambridge, Massachusetts, United States of America; Beth Israel Deaconess Medical Center, Division of Pulmonary, Critical Care, and Sleep Medicine, Boston, Massachusetts, United States of America; Department of Biostatistics, Harvard T.H. Chan School of Public Health, Boston, Massachusetts, United States of America
              </span>
            </span>
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8 text-base text-slate-700">
          {/* Link to ArXiv Preprint */}
          <a href="https://doi.org/10.1136/bmjhci-2023-100809 " target="_blank" rel="noopener noreferrer" className="block text-center ">
            <div className="relative w-[100px] h-[120px] border border-gray-300 mx-auto">
              <Image 
                src={div_fact_thumbnail} 
                alt="ArXiv Preprint thumbnail"
                layout="fill" // Use 'fill' layout to stretch the image
                objectFit="cover" // Adjust as needed to 'cover' or 'contain'
                objectPosition="center" // Optional, adjust as needed
              />
            </div>
            <span>PLOS Global Public Health</span>
          </a>

          {/* Link to GitHub Repo */}
          <a href="https://github.com/mmcdermott/AUC_is_all_you_need" target="_blank" rel="noopener noreferrer" className="block text-center">
            <div className="relative w-[100px] h-[120px] border border-gray-300 mx-auto">
              <Image 
                src={git_thumbnail} 
                alt="Github thumbnail"
                layout="fill" // Use 'fill' layout to stretch the image
                objectFit="cover" // Adjust as needed to 'cover' or 'contain'
                objectPosition="center" // Optional, adjust as needed
              />
            </div>
            <span>Github Repo</span>
          </a>
        </div>

        {/* Summary box */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <h3 className="font-semibold text-center text-gray-900 text-2xl mb-4">Diversity Factor in Journal Impact Evaluation</h3>
          <Paragraph className="text-base text-slate-900">
          This study critiques the current Impact Factor model used for evaluating journal impact, highlighting its limitations in reflecting the contribution to health outcomes globally. 
          We propose a novel tool the "Diversity Factor," incorporating four distinct elements: dataset properties, author country, author gender, and departmental affiliation. 
          </Paragraph>
          <Paragraph className="text-base text-slate-900">
          The findings, displayed on a <span className='italic hover:text-blue-600'> <Link href="www.equitablescience.com">static dashboard</Link> </span> to emphasize the need for ongoing, detailed analysis of diversity in scientific research. The Diversity Factor aims to highlight knowledge gaps and build confidence in research translation across diverse groups. As the definition of at-risk groups evolves, this metric's continuous measurement will remain crucial. 
          We advocate for further refinements by diverse author groups to enhance the Diversity Factor's efficacy.          
          </Paragraph>
        </div>

        {/* Introduction and Background */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl"> Rethinking Journal Impact Evaluation </p>
          </div>

          <div className="text-center pb-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900 ">
              In the last decade, the exponential growth in health data storage, analysis, and distribution, particularly with the advent of artificial intelligence (AI), has not been paralleled by its successful implementation in healthcare. Current AI models are either in prototype stages or exhibit substandard performance, often compounded by inherent biases affecting minorities. This calls for greater transparency in model development, improved data sharing, and diverse research groups to mitigate biases. However, such considerations are yet to be reflected in journal evaluation metrics, which still predominantly rely on the Impact Factor (IF). The IF, originally designed to track citations, now inaccurately reflects a journal's impact on community health and is susceptible to manipulation through practices like self-citation. 
              <br/><br/>
              The need for a comprehensive measure of health research's significance and relevance led to the proposal of the Diversity Factor (DF). This concept aims to supplement existing metrics by incorporating dataset characteristics, author country, gender, and departmental affiliation, evaluated independently rather than as a composite score. This approach addresses the lack of diversity in research, which is essential for comprehensive problem-solving and understanding. Our proposed DF is a foundational step towards a more inclusive, representative, and impactful scientific research landscape.
            </Paragraph>
          </div>
        </div>

        {/* Table Content Box */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 mt-4 rounded-lg"> {/* Added margin top and increased padding */}
          <h4 className="font-semibold text-center text-gray-900 text-xl mb-4">Elements for Assessing Journal Contribution to Scientific Excellence in Diversity, Equity, and Inclusion</h4>
          <table className="min-w-full leading-normal text-gray-700">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Element</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Guiding Questions</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Publications</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Diversity</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Do studies explore health, determinants of health, and underlying factors driving improved outcomes for diverse population groups?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Equity</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Do publications showcase research relevant to under-represented communities and populations?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Inclusion</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Have publications promoted inclusive and multidisciplinary research methods?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Datasets</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">What are the definitions and distributions of age, race, ethnicity, gender, language, and geography included in the study participants?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Authorship</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Author identity, country or origin</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Is there a wide range of author cultures, experience, and expertise, including country or origin and LMICs?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Author Gender</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Is there a balanced gender distribution on average among authors, and first/last authors?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Author Organization and Affiliation</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Is there a diverse range of organizations, including minority-serving institutions, industry, and academia?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Community experts</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Has the published research been conducted with community experts, and are they named co-authors?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Research Oversight</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Journal Editors and Reviewers</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Has the journal developed an accountability system to measure and ensure diversity among editors and reviewers?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Review Process</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Does a journal have a system to identify and respond to potential bias in the review process?</td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Communication and Dissemination</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Are the results of the above questions easily accessible and transparent for researchers and the general public to review?</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* Conclusion Section */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Addressing Diversity in Scientific Research</p>
          </div>

          <div className="text-center my-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
              The introduction of the Diversity Factor represents a significant paradigm shift in assessing the impact of academic research, particularly in the healthcare domain. This study exposes the stark underrepresentation of female authors and those from low and middle-income countries (LMICs) in current academic literature. Despite gradual improvements, entrenched biases and a trend towards centralization in academia present formidable challenges to equitable representation. The Diversity Factor's approach, focusing on dataset characteristics, author diversity, and research oversight, reveals the limitations of traditional citation-based metrics and underscores the need for a more inclusive and representative scientific community.
            </Paragraph>
            <Paragraph className="text-base text-slate-900">
              The findings call for an urgent restructuring of how scientific efforts are evaluated, moving beyond citation impact to consider the diversity of voices contributing to healthcare discussions. By doing so, we can avoid perpetuating biases against specific subgroups and ensure that health research serves all populations equitably. The Diversity Factor is not just a metric but a call to action for journals, researchers, and institutions to prioritize diversity and inclusivity. It challenges us to reflect on the sources of our data and ideas, striving to create a more diverse and inclusive environment that reflects the populations served by healthcare research. The goal is to break free from the echo chamber of limited perspectives and advance a field of medicine that is truly informed by and for the diverse global community.
            </Paragraph>
          </div>
        </div>



        {/* Related Work */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">Related Work</h3>
            <Paragraph className="text-base text-slate-900">
              Our work builds upon insights related to the impact of diversity in scientific research.
            </Paragraph>
          </div>

          <div className="flex justify-center space-x-4"> {/* Flex container for images */}
            <div style={{ width: '33%' }}> {/* Container for the first image */}
              <Image 
                src={equity_thumbnail} 
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
          </div>

            {/* Entry 1 */}
            <div style={{ width: '66%' }}> {/* Container for the first image */}
              <h3 className="font-semibold text-gray-900"> Gallifant J, Nakayama LF, Gichoya JW, Pierce R, Celi LA. Equity should be fundamental to the emergence of innovation. 2023.</h3>
              <p className="text-base text-justify mt-1 text-slate-900">
              <span className='font-bold'> Notes</span>: 
                We propose that health equity is a vital component of healthcare and should not be compromised to expedite the advancement of results for the few at the expense of vulnerable populations. 
                A data-centered future that works for all will require funding bodies to incentivize equity-focused AI, and organizations must be held accountable for the differential impact of such algorithms post-deployment.
              </p>
            </div>
          </div>
        </div>


        {/* Citation */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 mt-4 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">How To Cite</h3>
            <Paragraph className="italic text-sm text-slate-900">
              This work can be cited as follows: 
            </Paragraph>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 mb-2">Bibliography</h3>
            <p className="text-sm text-slate-900">
              Gallifant J, Zhang J, Whebell S, Quion J, Escobar B, Gichoya J, Herrera K, Jina R, Chidambaram S, Mehndiratta A, Kimera R, Marcelo A, Fernandez-Marcelo PG, Osorio JS, Villanueva C, Nazer L, Dankwa-Mullan I, Celi LA. "A new tool for evaluating health equity in academic journals; the Diversity Factor." PLOS Glob Public Health. 2023 Aug 14;3(8):e0002252. doi: 10.1371/journal.pgph.0002252. PMID: 37578942; PMCID: PMC10424852.
            </p>          
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">BibTeX</h3>
            <pre className="text-left bg-white p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-words text-sm text-slate-900">
              {`@article{gallifant2023new,
                title={A new tool for evaluating health equity in academic journals; the Diversity Factor},
                author={Gallifant, J and Zhang, J and Whebell, S and Quion, J and Escobar, B and Gichoya, J and Herrera, K and Jina, R and Chidambaram, S and Mehndiratta, A and Kimera, R and Marcelo, A and Fernandez-Marcelo, PG and Osorio, JS and Villanueva, C and Nazer, L and Dankwa-Mullan, I and Celi, LA},
                journal={PLOS Glob Public Health},
                volume={3},
                number={8},
                pages={e0002252},
                year={2023},
                publisher={Public Library of Science},
                doi={10.1371/journal.pgph.0002252},
                PMID={37578942},
                PMCID={PMC10424852}
              }`}
            </pre>
          </div>
        </div>
      </div>
      <footer className="bg-[#0B1120] text-center text-xl font-bold text-slate-900 p-4">
        <Link href="/" className="text-white hover:text-blue-800 p-2 rounded-lg transition duration-300 ease-in-out">
        Home
        </Link>
    </footer>
    </section>
  );
}
