import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BigText, Caption, Paragraph, Button } from '@/components/home/common';

import atomic_mistakes from '@/img/resources/atomic_mistakes.png';


export default function ProjectPage() {
  const disp_dash_thumbnail = require("@/img/resources/arxiv_thumbnails/disp_dash_thumb.png").default.src;
  const dig_ineq_thumbnail = require("@/img/resources/dig_ineq.jpg").default.src;
  const disp_dash = require("@/img/resources/dash_example.png").default.src;

  return (
    <section className='bg-white min-h-screen pt-24 sm:pt-32'>
      <Head>
        <title>Disparity Dashboards: An Evaluation of the Literature and Framework for Health Equity Improvement</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="bg-white container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <BigText> Disparity Dashboards: An Evaluation of the Literature and Framework for Health Equity Improvement </BigText> 
          <p className="my-5 text-base text-slate-800">
            {/* Authors with hover-over tooltips for affiliations */}
            <span className="relative cursor-pointer group">Jack Gallifant<sup>1</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Laboratory for Computational Physiology, Massachusetts Institute of Technology, Cambridge, MA, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Emmett Alexander Kistler<sup>2</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Division of Pulmonary, Critical Care, and Sleep Medicine, Beth Israel Deaconess Medical Center, Boston, MA, USA
              </span>
            </span>,{' '}
            {/* Repeat for each author */}
            <span className="relative cursor-pointer group">Luis Filipe Nakayama<sup>1,3</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Laboratory for Computational Physiology, Massachusetts Institute of Technology, Cambridge, MA, USA; Department of Ophthalmology, São Paulo Federal University, São Paulo, Brazil
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Chloe Zera<sup>2</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Obstetrics, Gynecology and Reproductive Biology, Beth Israel Deaconess Medical Center, Boston, MA, USA 
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Sunil Kripalani<sup>4</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Medicine, Vanderbilt University Medical Center, Nashville, TN, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Adelline Ntatin<sup>5</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Health Equity, Beth Israel Lahey Health, Boston, MA, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Leonor Fernandez<sup>2</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Medicine Beth Israel Deaconess Medical Center, Boston, MA, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">David Bates<sup>2,6</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Medicine, Harvard Medical School, Boston, MA, USA; Division of General Internal Medicine and Primary Care, Brigham and Womens Hospital, Boston, MA, USA; 
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Irene Dankwa-Mullan<sup>7,8</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Merative & Center for AI, Research, and Evaluation, IBM Watson Health, Cambridge, MA, USA; Department of Health Policy and Management, Milken Institute School of Public Health, George Washington University, Washington, DC, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Leo Anthony Celi<sup>1,2,9</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Laboratory for Computational Physiology, Massachusetts Institute of Technology, Cambridge, MA, USA; Division of Pulmonary, Critical Care, and Sleep Medicine, Beth Israel Deaconess Medical Center, Boston, MA, USA; Department of Biostatistics, Harvard T.H. Chan School of Public Health, Boston, MA, USA
              </span>
            </span>
          </p>
        </div>
            <div className="flex justify-center space-x-4 mb-8 text-base text-slate-700">
          {/* Link to ArXiv Preprint */}
          <a href="https://doi.org/10.1016/S2589-7500(23)00150-4" target="_blank" rel="noopener noreferrer" className="block text-center ">
            <div className="relative w-[100px] h-[120px] border border-gray-300 mx-auto">
              <Image 
                src={disp_dash_thumbnail} 
                alt="Lancet Digital Health"
                layout="fill" // Use 'fill' layout to stretch the image
                objectFit="cover" // Adjust as needed to 'cover' or 'contain'
                objectPosition="center" // Optional, adjust as needed
              />
            </div>
            <span>Lancet Digital Health</span>
          </a>
        </div>

        {/* Summary box */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <h3 className="font-semibold text-center text-gray-900 text-2xl mb-4">Evaluating Systematic Equality Improvement</h3>
          <Paragraph className="text-base text-slate-900">
              This paper addresses the growing need for systematic, continuous, and transparent reporting of patient outcomes across diverse populations. 
              It evaluates studies that have successfully developed disparity dashboards, highlighting their role in visualizing data to identify clinical outcome disparities. 
              This aids in guiding quality and equality improvement efforts that aim to enhance health equity. 
          </Paragraph>
        </div>

        {/* Introduction Box */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Monitoring Health Outcomes</p>
          </div>

          <div className="text-center pb-2"> {/* Basic text */}
            <Paragraph className="text-base text-slate-900 ">
            The COVID-19 pandemic starkly exposed health inequities, especially among racial and ethnic subgroups, with these groups experiencing higher rates of infection, hospitalization, and mortality. 
            This scenario is not unique to COVID-19 but extends to other health disparities influenced by interconnected social determinants of health.
            Additionally, artificial intelligence (AI) in healthcare, while offering personalized care and improved quality, poses risks of exacerbating existing biases. This highlights the need for infrastructure to evaluate, validate, and update AI models and monitor their impact on patient subgroups.
            </Paragraph>
            <Paragraph className="text-base text-slate-900 ">
            The need for continuous monitoring and evaluation of health disparities is critical to address these issues effectively. 
            This necessitates systematic reporting of patient outcomes in specific subgroups and the development of infrastructure to capture differences over time.
            </Paragraph>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[60vw] h-[40vh] border border-gray-300 mx-auto">
                <Image 
                  src={disp_dash} 
                  alt="Disparity Dashboard Diagram"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </a>
          </div>

          {/* Caption with top margin */}
          <div className="text-center my-2"> 
            <Paragraph className="italic text-sm text-slate-600">
              Electronic patient data flows in NHS England
              Data flows go upwards and are coloured by destination. 
              For data source and extractors, node size is proportional to population catchment (eg, NHS Digital=55 million). 
              For data consumers, node size is proportional to the number of projects (eg, University of Oxford=178). 
              NHS=National Health Service.
            </Paragraph>
          </div>



          {/* Table Content Box */}
          <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
            <div className="text-left mb-4"> {/* Title with bottom margin */}
              <p className="font-semibold text-gray-900 text-2xl">Current State of Disparity Dashboards</p>
              <div className="text-center pb-2"> {/* Basic text */}
                <Paragraph className="text-base text-slate-900 ">
                We identified 22 studies that published disparity dashboards, covering areas like COVID-19, maternal mortality, pediatric healthcare, emergency departments, HIV cases, rural healthcare, and Medicare Health Equity Summary Score outcomes.  
                Key findings from these studies are summarized in the table below.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8 mt-4 rounded-lg"> {/* Added margin top and increased padding */}
            <h4 className="font-semibold text-center text-gray-900 text-xl mb-4">Important Questions for Developing Disparity Dashboards</h4>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Key Questions</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Explanation</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">Clear audience and use case</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Clarifying the intended use and user is essential, with different interfaces for various groups such as management, governments, physicians, and patients. Multilanguage functionality is crucial for engaging diverse cohorts.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Focused outcomes</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Dashboards must collect data addressing the root causes of outcomes and disparities. Outcomes should be tailored to individual groups, with inclusion of process measures for tracking intermediate steps.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Interaction and exploration</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Functionality should allow analysis of various population sizes and permit interactive exploration with different levels of detail. Providing multiple views and exploring data for biases is essential.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Context-appropriate design</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Important to present absolute and relative values with uncertainty measures, using contextual language. Visual cues can simplify information and emphasize key results.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Maximum transparency</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Transparency in data sources and methods builds trust. Data should be accessible to researchers and patients, with consideration of legal and privacy issues.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Continuous sampling</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Continuous monitoring is necessary to track disparities over time and in relation to policies. Dashboards should have flexibility for challenging assumptions and integrating new data.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Appropriate disaggregation</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Moving beyond demographic criteria to underlying social risk factors is crucial. Data should be collected on key areas like REGAL, and a variety of composites should be created to represent patients accurately.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Diversity in design and in use</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Diverse backgrounds of users and designers are crucial to prevent biased assessments. Consultation with patient partners and stakeholders is important in the design process.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Process evaluation</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Data integrity checks, forecasting, and exploratory analysis are key for calibration and evaluation. Findings should be distributed transparently for honest discourse and solution development.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Oversight and funding</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Benchmarks and aligned incentives are necessary for organizations to strive towards goals. Local accountability measures should ensure active identification and deployment of interventions.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Conclusion Box */}
          <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
            <div className="text-left mb-4"> {/* Title with bottom margin */}
              <p className="font-semibold text-gray-900 text-2xl">Advancing Health Equity with Disparity Dashboards</p>
              <div className="text-center pb-2"> {/* Basic text */}
                <Paragraph className="text-base text-slate-900 ">
                Disparity dashboards extend beyond traditional clinical dashboards by not only identifying and monitoring disparities but also aiding in understanding their underlying causes. These dashboards emphasize the importance of considering a broad range of factors including social or structural determinants of health and the need for actionable information. However, challenges exist in achieving interoperability between sites, regions, and countries, and in standardizing health equity data for comparative assessment.
                <br/><br/>
                Despite these challenges, disparity dashboards hold immense potential in improving health equity. 
                As institutions increasingly align their strategies to promote equitable outcomes, the use of disparity dashboards becomes even more crucial. 
                These tools, developed by diverse, interdisciplinary teams, are vital for safeguarding patient outcomes, improving health policies, and reducing health inequities.
                They empower health systems and providers to track, measure, and understand their capabilities in delivering equitable care, ensuring accountability and supporting the overarching goal of improving healthcare equity and quality.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        {/* Related Work */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">Related Work</h3>
            <Paragraph className="text-base text-slate-900">
              Our work builds upon work using digital tools to evaluate health inequities:
            </Paragraph>
          </div>

          <div className="flex justify-center space-x-4"> {/* Flex container for images */}
            <div style={{ width: '33%' }}> {/* Container for the first image */}
              <Image 
                src={dig_ineq_thumbnail}
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
            </div>

            {/* Entry 1 */}
            <div style={{ width: '66%' }}> {/* Container for the first image */}
              <Link
                href="https://doi.org/10.1136%2Fbmjhci-2023-100809"
              >
                <h3 className="font-semibold text-gray-900 hover:text-blue-600">Joe Zhang, Jack Gallifant, Robin L Pierce, Aoife Fordham, James Teo, Leo Celi, Hutan Ashrafian. Quantifying digital health inequality across a national healthcare system. 2023.</h3>
              </Link>
              <p className="text-base text-justify mt-1 text-slate-900">
              <span className='font-bold'> Notes</span>: 
              This study quantified factors associated with differential utilisation of digital tools in the National Health Service (NHS). 
              Results are concerning for technologically driven widening of healthcare inequalities. 
              Targeted incentive to digital is necessary to prevent digital disparity from becoming health outcomes disparity.
              </p>
            </div>

          </div>
        </div>


        {/* Citation */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 mt-4 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">How To Cite</h3>
            <Paragraph className="italic text-sm text-slate-900">
              This study can be cited as follows. 
            </Paragraph>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 mb-2">Bibliography</h3>
            <p className="text-sm text-slate-900">
              Zhang J, Gallifant J, Pierce RL, et al. "Quantifying digital health inequality across a national healthcare system." BMJ Health & Care Informatics 2023;30:e100809. doi: 10.1136/bmjhci-2023-100809.
            </p>          
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">BibTeX</h3>
            <pre className="text-left bg-white p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-words text-sm text-slate-900">
              {`@article{zhang2023quantifying,
                title={Quantifying digital health inequality across a national healthcare system},
                author={Zhang, Joe and Gallifant, Jack and Pierce, Robin L and Fordham, Aoife and Teo, James and Celi, Leo and Ashrafian, Hutan},
                journal={BMJ Health & Care Informatics},
                volume={30},
                pages={e100809},
                year={2023},
                publisher={BMJ Publishing Group},
                doi={10.1136/bmjhci-2023-100809}
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
