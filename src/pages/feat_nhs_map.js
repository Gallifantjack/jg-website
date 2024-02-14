import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BigText, Paragraph } from '@/components/home/common';


export default function ProjectPage() {
  const nhs_thumbnail = require("@/img/resources/arxiv_thumbnails/nhs_flow_journal.png").default.src;
  const map_ball = require("@/img/resources/map_ball_chart.jpg").default.src;
  const map_clusters = require("@/img/resources/map_clusters.jpg").default.src;
  const odiao_thumbnail = require("@/img/resources/odiao.jpg").default.src;
  const asset_diversity = require("@/img/resources/nhs_assets.jpg").default.src;


  return (
    <section className='bg-white min-h-screen pt-24 sm:pt-32'>
      <Head>
        <title>Mapping and Evaluating National Data Flows: Transparency, Privacy, and Guiding Infrastructural Transformation</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="bg-white container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <BigText> Mapping and Evaluating National Data Flows: Transparency, Privacy, and Guiding Infrastructural Transformation </BigText> 
          <p className="my-5 text-base text-slate-800">
            {/* Authors with hover-over tooltips for affiliations */}
            <span className="relative cursor-pointer group">Joe Zhang, BMBCh<sup>1,2</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, UK; Department of Critical Care, Guys and St Thomas NHS Foundation Trust, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Jess Morley, MS<sup>3</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Oxford Internet Institute, University of Oxford, Oxford, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Jack Gallifant, MSc<sup>4,5</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Intensive Care, Imperial College Healthcare NHS Trust, London, UK; Laboratory for Computational Physiology, Massachusetts Institute of Technology, Cambridge, MA, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Chris Oddy, MBBS<sup>6</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Anaesthesia, Critical Care and Pain, St Georges Healthcare NHS Trust, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Prof James T Teo, PhD<sup>2,7</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Critical Care, Guys and St Thomas NHS Foundation Trust, London, UK; Department of Neurology, Kings College Hospital NHS Foundation Trust, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Prof Hutan Ashrafian, PhD<sup>1,8</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, UK; Leeds University Business School, Leeds, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Prof A Darzi PhD<sup>1</sup>
              <span className="absolute bottom-full mb-2 w-80 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, UK
              </span>
            </span>
            <br />
            <a href="https://doi.org/10.1016/S2589-7500(23)00157-7">DOI: 10.1016/S2589-7500(23)00157-7</a>
            <br />
            <a href="mailto:joe.zhang@imperial.ac.uk">joe.zhang@imperial.ac.uk</a>
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8 text-base text-slate-700">
          {/* Link to ArXiv Preprint */}
          <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer" className="block text-center ">
            <div className="relative w-[100px] h-[120px] border border-gray-300 mx-auto">
              <Image 
                src={nhs_thumbnail} 
                alt="ArXiv Preprint thumbnail"
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
          <h3 className="font-semibold text-center text-gray-900 text-2xl mb-4">Navigating the Complexities of NHS Data Sharing</h3>
          <Paragraph className="text-base text-slate-900">
            This study scrutinizes the UK National Health Service's (NHS) electronic health records, revealing significant challenges in data sharing. It maps out data flows to over 460 entities, including academic, commercial, and public sectors. The findings show that multistage data flow chains obscure transparency, jeopardizing public trust. Moreover, most data interactions fail to meet best practices for secure access, raising privacy concerns. The existing infrastructure also leads to duplicate data, diminishing the diversity and value of the data. 
            Recommendations for infrastructure transformation and a new website <a href="https://DataInsights.uk" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-600'>DataInsights.uk</a> aim to enhance transparency and showcase NHS data assets.
          </Paragraph>
        </div>


        {/* Images and Figures */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Data Flow Patterns in NHS England</p>
          </div>

          <div className="text-center pb-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900 ">
                NHS England, comprising 216 hospital trusts and 6,544 primary care providers, manages healthcare interactions for a population of about 56 million.
                Figure 2 illustrates the national data flows, highlighting four primary models of data extraction: 1) structured clinical codes from primary care EHRs, 2) administrative data from secondary care by NHS Digital, 3) data aggregation within regional shared care record data warehouses, and 4) proprietary secondary care data pipelines. 
            </Paragraph>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[30vw] h-[40vh] border border-gray-300 mx-auto">
                <Image 
                  src={map_clusters} 
                  alt="Clusters and NHS data flows"
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

          <div className="text-center my-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
              These models vary in the resolution and type of data extracted, ranging from standard clinical codes to high-resolution data from secondary care. 
              The visual representation in Figure 1, with data flow directions and node sizes, provides an insightful overview of the data extraction sources and their reach.
            </Paragraph>
          </div>
        </div>


        {/* More content */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Secondary Use Ecosystem and Top Data Consumers </p>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[30vw] h-[40vh] border border-gray-300 mx-auto">
                <Image 
                  src={map_ball} 
                  alt="Atomic Mistakes Diagram"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </a>
          </div>

          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="italic text-sm text-slate-600">
              Figure 3. Voronoi chart showing eight top consumers for NHS data across each of six categories, by number of discovered projects during the study period.
            </Paragraph>
          </div>
          
          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
              The NHS data, as revealed in Figure 2, feeds a diverse and extensive ecosystem of secondary uses, involving over 460 non-NHS organizations. 
              These entities, which have accessed, maintained, or utilized NHS data since April 2021, include a wide array of sectors such as academia, pharmaceuticals, life sciences, and non-profits. Prominent among these are 216 universities, 143 companies in life sciences and data analytics, and 44 non-profit organizations. The figure also shows the eight top consumers across six categories, demonstrating the dominant forms of data use, which span research studies, publications, audits, and various forms of partnerships. 
              This comprehensive view underlines the significant reach and impact of NHS data beyond its immediate healthcare context.            
              </Paragraph>
          </div>
        </div>
        
        {/* More content */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Balance and Diversity of NHS Data Assets </p>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[30vw] h-[40vh] border border-gray-300 mx-auto">
                <Image 
                  src={asset_diversity} 
                  alt="Atomic Mistakes Diagram"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </a>
          </div>

          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="italic text-sm text-slate-600">
              Figure 3. Individual data assets per extractor type, showing volume of data types and linkages
            </Paragraph>
          </div>
          
          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
                    The data extractors within the NHS vary significantly in type and volume of data maintained, acting as multipliers in the data distribution network. 
                    Figure 3 highlights this diversity, showing primary care data as the most prevalent type maintained. 
                    Whole-population primary care data are accessible for COVID-19 research and through platforms like OpenSAFELY. 
                    The figure also reveals an overlap in data extractions, with some primary care practices reporting data extraction by multiple databases, indicating substantial duplication.
                    This comprehensive view underscores the complex landscape of data assets within the NHS, from primary care records to shared care and regional systems, each contributing to a vast, yet intricate web of data flows.           
              </Paragraph>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">NHS Data Transformation Recommendations </p>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-gray-900">Enhance Public Transparency:</strong> Ensure transparent reporting of data usage at various dissemination nodes to prevent the need for investigative discovery and protect against data breaches.
            </li>
            <li>
              <strong className="text-gray-900">Revise Opt-Out Conditions:</strong> Set opt-out options at the level of data distribution to different consumer types, rather than at the point of extraction, to maintain patient autonomy and access to data-driven interventions.
            </li>
            <li>
              <strong className="text-gray-900">Utilize Existing Infrastructure:</strong> Improve and expand the use of current infrastructure, like NHS Digital and OpenSAFELY, through public outreach and education, before introducing new Secure Data Environments (SDEs).
            </li>
            <li>
              <strong className="text-gray-900">Develop New Data Infrastructure:</strong> Focus on extracting untapped secondary care EHR data and enhancing multimodal data availability, rather than redistributing existing data. Consider a national federated data platform for regional analytics, emphasizing privacy and reducing bulk data transfers.
            </li>
            <li>
              <strong className="text-gray-900">Focus on Intervention Capabilities:</strong> Shift infrastructure development towards interventions (not just analysis), including faster data provision, improved regulatory processes, and AI production capabilities. Leverage regional centers for developing such infrastructure.
            </li>
            <li>
              <strong className="text-gray-900">Assess Monetary Value Transfer:</strong> Evaluate the financial flow across data chains to determine the value return to the healthcare system and establish beneficial revenue models for both patients and providers.
            </li>
          </ul>
        </div>

        {/* Related Work */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">Related Work</h3>
            <Paragraph className="text-base text-slate-900">
              Our work builds upon insights in other work that has examined robustness of models and metrics among subpopulations:
            </Paragraph>
          </div>

          <div className="flex justify-center space-x-4"> {/* Flex container for images */}
            <div style={{ width: '33%' }}> {/* Container for the first image */}
              <Image 
                src={odiao_thumbnail} 
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
          </div>

            {/* Entry 1 */}
            <div style={{ width: '66%' }}> {/* Container for the first image */}
              <Link
                href="https://doi.org/10.1136/bmjhci-2023-100771"
              >
              <h3 className="font-semibold text-gray-900 hover:text-blue-600"> Watson, Hope*, Gallifant, Jack, Lai, Yuan et al., Delivering on NIH data sharing requirements: avoiding Open Data in Appearance Only. 2023.</h3>
              </Link>
              <p className="text-base text-justify mt-1 text-slate-900">
              <span className='font-bold'> Notes</span>: 
              This work proposes a framework that states the main risks associated with data sharing, systematically presents risk mitigation strategies and provide examples through a healthcare lens
              In order to move towards Open Data, the creation of mechanisms for incentivisation, beginning with recentring data sharing on patient benefits, is required.
              </p>
            </div>
          </div>
        </div>

        {/* Citation Section */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 mt-4 p-8 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">Citation Details</h3>
            <Paragraph className="italic text-sm text-slate-900">
              For academic referencing, please cite this work as follows.
            </Paragraph>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 mb-2">Bibliography</h3>
            <p className="text-sm text-slate-900">
              Joe Zhang, Jess Morley, Jack Gallifant, Chris Oddy, James T Teo, Hutan Ashrafian, Brendan Delaney, Ara Darzi, "Mapping and evaluating national data flows: transparency, privacy, and guiding infrastructural transformation," The Lancet Digital Health, Volume 5, Issue 10, 2023, Pages e737-e748, ISSN 2589-7500, [https://doi.org/10.1016/S2589-7500(23)00157-7](https://www.sciencedirect.com/science/article/pii/S2589750023001577).
            </p>          
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">BibTeX</h3>
            <pre className="text-left bg-white p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-words text-sm text-slate-900">
              {`@article{zhang2023mapping,
                title={Mapping and evaluating national data flows: transparency, privacy, and guiding infrastructural transformation},
                author={Zhang, Joe and Morley, Jess and Gallifant, Jack and Oddy, Chris and Teo, James T and Ashrafian, Hutan and Delaney, Brendan and Darzi, Ara},
                journal={The Lancet Digital Health},
                volume={5},
                number={10},
                pages={e737-e748},
                year={2023},
                publisher={Elsevier},
                doi={10.1016/S2589-7500(23)00157-7}
                url={https://www.sciencedirect.com/science/article/pii/S2589750023001577}
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
