import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BigText, Caption, Paragraph, Button } from '@/components/home/common';

export default function ProjectPage() {
  const dig_ineq_thumbnail = require("@/img/resources/arxiv_thumbnails/dig_ineq_thumb.png").default.src;
  const dig_ineq = require("@/img/resources/dig_ineq.jpg").default.src;

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
          <a href="https://arxiv.org/pdf/2401.06091.pdf" target="_blank" rel="noopener noreferrer" className="block text-center ">
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
          <h3 className="font-semibold text-center text-gray-900 text-2xl mb-4">How Should We Prioritize Fixing Model Mistakes?</h3>
          <Paragraph className="text-base text-slate-900">
            This paper critically examines the widely held belief in machine learning (ML) that the area under the precision-recall curve (AUPRC) is superior to the area under the receiver operating characteristic (AUROC) for binary classification tasks in class-imbalanced scenarios. 
            Through novel mathematical analysis, it demonstrates that AUPRC is not inherently superior and may even be detrimental due to its tendency to overemphasize improvements in subpopulations with more frequent positive labels, potentially exacerbating algorithmic biases. 
          </Paragraph>
        </div>

        {/* Images and Figures */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Using Atomic Mistakes</p>
          </div>

          <div className="text-center pb-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900 ">
                Atomic mistakes occur when neighboring samples, when
                ordered by model score, are out-of-order with respect to the classi-
                fication label. AUROC improves by a constant amount no matter
                which atomic mistake is corrected; AUPRC improves in descend-
                ing order with model score due to the dependence on model firing
                rate (Theorem 1). 
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
              Different types of mistakes a model can learn to fix. 
              y= 0 is the negative class and y= 1 is the positive class. 
              a= 0 is subgroup 1 and a= 1 is subgroup 2.
            </Paragraph>
          </div>

          <div className="text-center my-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
              Which mistake you should prioritize fixing first
              depends on usage; in a classification setting, where you do not
              know whether the sample of interest is from a high-scoring or
              low-scoring region, you want to use a metric that optimizes scores
              in an unbiased manner, like AUROC. In a single-stream retrieval
              setting, where you choose the top-k samples, regardless of group
              membership and evaluate with those, a metric that favors mistakes
              in high-scoring regions like AUPRC will be most impactful. But,
              if you care about retrieving the top-k metrics from multiple distinct
              subpopulations within your dataset, AUPRC will be dangerous as
              it will favor the high-prevalence sub-population
            </Paragraph>
          </div>
        </div>


        {/* More content */}
        <div className="max-w-4xl mx-auto py-8"> {/* Padding around the entire section */}
          <div className="text-left mb-4"> {/* Title with bottom margin */}
            <p className="font-semibold text-gray-900 text-2xl">Optimizing AUPRC Introduces Disparities</p>
          </div>

          <div className="flex justify-center space-x-4"> {/* Flex container for images */}
            <div style={{ width: '50%' }}> {/* Container for the first image */}
              <Image 
                src={dig_ineq} 
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
              <p className="text-center text-sm text-slate-900"> {/* Caption for the second image */}
                Optimizing overall AUROC.
              </p>
            </div>

            <div style={{ width: '50%' }}> {/* Container for the second image */}
              <Image 
                src={dig_ineq} 
                alt="Second Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
              <p className="text-center text-sm text-slate-900"> {/* Caption for the second image */}
                Optimizing overall AUPRC.
              </p>
            </div>
          </div>

          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="italic text-sm text-slate-600">
              Comparison of the impact of optimizing for overall AUROC and overall AUPRC on the per-group AUROC and AUPRCs of two groups in a synthetic setting, using both the sequentially fixing atomic mistakes optimization procedure. 
              Left: Fixing atomic mistakes to optimize overall AUROC, Right: Fixing atomic mistakes to optimize overall AUPRC.  
            </Paragraph>
          </div>
          
          <div className="text-center mt-2"> {/* Caption with top margin */}
            <Paragraph className="text-base text-slate-900">
              These figures demonstrate the impact of the optimization metric on subpopulation disparity. In particular, 
              on the right we observe a notable disparity introduced
              when optimizing under the AUPRC metric. This is evident
              in the performance metrics across the high and low preva-
              lence subpopulations, which exhibit significant divergence
              as the optimization process favors the group with higher
              prevalence. In comparison, when optimizing for overall AUROC (Left), the AUROC and
              AUPRC of both groups increase together.  
            </Paragraph>
          </div>
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
                src={dig_ineq} 
                alt="First Image Description"
                layout="responsive"
                width={100} // Example ratio
                height={100} // Maintain aspect ratio
              />
          </div>

            {/* Entry 1 */}
            <div style={{ width: '66%' }}> {/* Container for the first image */}
              <h3 className="font-semibold text-gray-900"> Yang, Zhang*, Katabi, and Ghassemi. Change is Hard: A Closer Look at Subpopulation Shift. 2023.</h3>
              <p className="text-base text-justify mt-1 text-slate-900">
              <span className='font-bold'> Notes</span>: 
              This work is a fine-grained analysis of the variation in mechanisms that cause subpopulation shifts, and how algorithms generalize across such diverse shifts at scale. 
              </p>
            </div>
          </div>
        </div>


        {/* Citation */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 mt-4 p-8 rounded-lg"> {/* Added border and increased padding */}
          <div className="text-center mb-4"> {/* Title with bottom margin */}
            <h3 className="font-semibold text-left text-gray-900 text-2xl mb-4">How To Cite</h3>
            <Paragraph className="italic text-sm text-slate-900">
              This work is not yet peer-reviewed. The preprint can be cited as follows. 
            </Paragraph>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 mb-2">Bibliography</h3>
            <p className="text-sm text-slate-900">
              Matthew B. A. McDermott, Lasse Hyldig Hansen, Haoran Zhang, Giovanni Angelotti, and Jack Gallifant. "A Closer Look at AUROC and AUPRC under Class Imbalance" arXiv preprint arXiv:2401.06091 (2024).
            </p>          
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">BibTeX</h3>
            <pre className="text-left bg-white p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-words text-sm text-slate-900">
              {`@misc{mcdermott2024closer,
            title={A Closer Look at AUROC and AUPRC under Class Imbalance}, 
            author={Matthew B. A. McDermott and Lasse Hyldig Hansen and Haoran Zhang and Giovanni Angelotti and Jack Gallifant},
            year={2024},
            eprint={2401.06091},
            archivePrefix={arXiv},
            primaryClass={cs.LG}
        }`}
            </pre>
          </div>
        </div>

      </div>
      <footer className="bg-[#0B1120] text-center text-xl font-bold text-slate-900 p-4">
        <Link href="/" className="text-white hover:text-blue-800 p-2 rounded-lg transition duration-300 ease-in-out">
        See more work
        </Link>
    </footer>
    </section>
  );
}
