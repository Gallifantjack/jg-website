import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BigText, Caption, Paragraph, Button } from '@/components/home/common';

export default function ProjectPage() {
  const dig_ineq_thumbnail = require("@/img/resources/arxiv_thumbnails/dig_ineq_thumb.png").default.src;
  const dig_ineq = require("@/img/resources/dig_ineq.jpg").default.src;
  const ddoh_box = require("@/img/resources/ddoh_box.png").default.src;

  return (
    <section className='bg-white min-h-screen pt-24 sm:pt-32'>
      <Head>
        <title>Quantifying Digital Health Inequality Across a National Healthcare System</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="bg-white container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <BigText> Quantifying Digital Health Inequality Across a National Healthcare System </BigText>
          <p className="my-5 text-base text-slate-800">
            {/* Authors with hover-over tooltips for affiliations */}
            <span className="relative cursor-pointer group">Joe Zhang<sup>1,2</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, UK; Department of Critical Care, Guy's and St. Thomas' Hospital, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Jack Gallifant<sup>2,3</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Critical Care, Guy's and St. Thomas' Hospital, London, UK; Institute for Medical Engineering and Science, Massachusetts Institute of Technology, Cambridge, Massachusetts, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Robin L Pierce<sup>4</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                University of Exeter Law School, University of Exeter, Exeter, UK
              </span>
            </span>,{' '}
                        <span className="relative cursor-pointer group">Aoife Fordham<sup>5</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Transformation Directorate, NHS England, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">James Teo<sup>6,7</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Department of Neurology, Kings College Hospital NHS Foundation Trust, London, UK; London Medical Imaging & AI Centre, Guy's and St. Thomas' Hospital, London, UK
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Leo Celi<sup>3,8</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute for Medical Engineering and Science, Massachusetts Institute of Technology, Cambridge, Massachusetts, USA; Division of Pulmonary, Critical Care and Sleep Medicine, Beth Israel Deaconess Medical Center, Boston, Massachusetts, USA
              </span>
            </span>,{' '}
            <span className="relative cursor-pointer group">Hutan Ashrafian<sup>1,9</sup>
              <span className="absolute bottom-full mb-2 w-64 bg-black text-white text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
                Institute of Global Health Innovation, Imperial College London, London, UK; Leeds Business School, University of Leeds, Leeds, UK
              </span>
            </span>
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8 text-base text-slate-700">
          {/* Link to ArXiv Preprint */}
          <a href="https://doi.org/10.1136/bmjhci-2023-100809" target="_blank" rel="noopener noreferrer" className="block text-center ">
            <div className="relative w-[100px] h-[120px] border border-gray-300 mx-auto">
              <Image 
                src={dig_ineq_thumbnail} 
                alt="ArXiv Preprint thumbnail"
                layout="fill" // Use 'fill' layout to stretch the image
                objectFit="cover" // Adjust as needed to 'cover' or 'contain'
                objectPosition="center" // Optional, adjust as needed
              />
            </div>
            <span>BMJ Health & Care Informatics</span>
          </a>
        </div>

        {/* Summary box */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <h3 className="font-semibold text-center text-gray-900 text-2xl mb-4">Digital Health Inequality in the National Health Service</h3>
          <Paragraph className="text-base text-slate-900">
            This study quantifies digital health inequality within England's National Health Service (NHS). 
            It focuses on the differential utilization of digital tools across population groups, examining the deployment of universal digital health interventions like a national smartphone app and online primary care services. 
          </Paragraph>
          <Paragraph className="text-base text-slate-900">
            The results reveal a significant association between increased population deprivation and reduced digital tool usage. 
            Specifically, the most deprived quintiles correlate to lower activation rates of the NHS App, affecting approximately 4.27 million patients.
            The findings raise concerns about the potential widening of healthcare inequalities driven by technology. The study underscores the need for targeted incentives to address digital disparities, thus preventing them from translating into broader health outcome disparities.
          </Paragraph>
        </div>


        {/* Images and Figures */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Quantifying Digital Health Inequality</p>
          </div>

          <div className="text-center pb-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900 ">
                The past decade's rapid digital transformation in healthcare has highlighted the importance of digital access as a key health determinant. This study focuses on observationally quantifying digital health inequalities in England, particularly in the context of the NHS 'Digital First' strategy. We analyzed two NHS digital interventions: the 'NHS App' for accessing services and records, and online portals for primary care interactions, to measure the adjusted association of socioeconomic and demographic factors with digital utilization. Our methods incorporated multivariable analyses at the practice level, considering variables like socioeconomic deprivation, ethnicity, age, geography, disease and medication burden, and provider characteristics. This approach provides a unique observational analysis of digital product activation, reflecting broader trends in digital health utilization across the population.
            </Paragraph>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[30vw] h-[40vh] border border-gray-300 mx-auto">
                <Image 
                  src={dig_ineq} 
                  alt="Atomic Mistakes Diagram"
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
              Three-dimensional choropleth maps showing 
              (A) percentage of population with activated accounts on the NHS App at the level of middle layer super output (MSOA) geographical units; 
              (B) estimated percentage of population where NHS App non-usage is associated with presence in lowest two deprivation quintiles at MSOA level, 
              derived from regression coefficients in multivariable model and per-practice activation metadata. 
              Values are represented by both colour and height of each unit. NHS, National Health Service.
            </Paragraph>
          </div>

          
          {/* Final Section */}
          <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
            <div className="text-left mb-4"> {/* Title with bottom margin */}
              <p className="font-semibold text-gray-900 text-2xl">Digital Equality: A Crucial Element in Modern Healthcare</p>
            </div>

            <div className="text-center pb-2"> {/* Caption with top margin */}
              <Paragraph className="text-base text-slate-900 ">
                  Our study reveals a significant digital divide in healthcare, with lower socioeconomic strata showing substantially reduced digital engagement, particularly in the usage of the NHS app. This translates to an estimated 4.27 million patients in England being disadvantaged due to digital inequity. While ethnicity did not show a direct correlation, it is likely influenced by other factors in our model.
              </Paragraph>
              <Paragraph className="text-base text-slate-900 ">
                  The crux of our findings is the real-world impact of digital inequality in a health system increasingly reliant on digital solutions. Despite limitations in measuring the extent of usage and factors like digital literacy, our results raise important concerns as the NHS moves towards app-based healthcare access. The risk is clear: without careful consideration, digital transformation could inadvertently widen healthcare access disparities.
              </Paragraph>
              <Paragraph className="text-base text-slate-900 ">
                  To address this, we propose three key recommendations. First, digital transformation should be context-specific, with a focus on local needs and strong community links. Second, while achieving complete digital equality may be challenging, the efficiencies gained from digital pathways should be reinvested in supporting vulnerable groups. Lastly, embedding equity considerations in the assessment of digital technologies is vital. Monitoring disparities in digital health utilization and outcomes should be an ongoing process, not just a one-time evaluation.
                  In conclusion, our study underscores the urgent need for targeted strategies to bridge the digital divide in healthcare. As the NHS and other health systems worldwide continue to embrace digital transformation, it is crucial to ensure that this shift does not exacerbate existing inequalities but rather serves as a tool for promoting equitable access to healthcare for all.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Related Work */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">Related Work</h3>
            <Paragraph className="text-base text-slate-900">
              Our work builds upon insights into how technology can impact outcomes across subgroups:
            </Paragraph>
          </div>

          <div className="flex justify-center space-x-4"> {/* Flex container for images */}
            <div style={{ width: '33%' }}> {/* Container for the first image */}
              <Image 
                src={ddoh_box} 
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
          </div>

            {/* Entry 1 */}
            <div style={{ width: '66%' }}> {/* Container for the first image */}
            <Link href="https://doi.org/10.1038/s41581-023-00763-4">
              <h3 className="font-semibold text-gray-900 hover:text-blue-600"> Gallifant, J., Celi, L.A. & Pierce, R.L. Digital determinants of health: opportunities and risks amidst health inequities. 2023.</h3>
              </Link>
              <p className="text-base text-justify mt-1 text-slate-900">
              <span className='font-bold'> Notes</span>: 
                While digital transformation offers unprecedented opportunities for advancing healthcare, it also raises complex ethical and legal challenges. 
                Emerging drivers of health disparity termed <span className='italic'>digital determinants of health (DDOH)</span> are explored in this piece.
              </p>
            </div>
          </div>
        </div>


        {/* Citation */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 mt-4 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">How To Cite</h3>
            <Paragraph className="text-sm text-slate-900">
              This article can be cited as follows:
            </Paragraph>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 mb-2">Bibliography</h3>
            <p className="text-sm text-slate-900">
              Joe Zhang, Jack Gallifant, Robin L Pierce, et al. "Quantifying digital health inequality across a national healthcare system." BMJ Health & Care Informatics 2023;30:e100809. doi: 10.1136/bmjhci-2023-100809.
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
