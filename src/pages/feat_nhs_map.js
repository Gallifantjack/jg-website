import Head from 'next/head';
import Link from 'next/link';

import mapClustersImage from '@/img/resources/map_clusters.jpg';


export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Mapping and Evaluating National Data Flows: Transparency, Privacy, and Guiding Infrastructural Transformation</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Mapping and Evaluating National Data Flows: Transparency, Privacy, and Guiding Infrastructural Transformation</h1>
          <p className="mb-4">
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

        <div className="flex justify-center space-x-4 mb-8">
          {/* Link to ArXiv Preprint */}
          <a href="https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00157-7/fulltext" target="_blank" className="block text-center">
            <img src="@/img/resources/map_thumb.png" alt="ArXiv Preprint thumbnail" className="h-24 w-20 border border-gray-300 mx-auto" />
            <span>ArXiv Preprint</span>
          </a>
          {/* Link to GitHub Source Code
          <a href="https://github.com/rohitgandikota/unified-concept-editing" target="_blank" className="block text-center">
            <img src="/images/code-thumb.png" alt="GitHub code thumbnail" className="h-24 w-20 border border-gray-300 mx-auto" />
            <span>Source Code</span>
          </a> */}
        </div>

        {/* Summary box */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Navigating the Complexity of NHS Data Flows: Challenges and Solutions</h3>
          <p>UK's NHS harbors a treasure trove of health data through its electronic health records, offering unprecedented potential for population-level research. Yet, this vast data landscape faces hurdles in transparency, privacy, and analysis.</p>
          <p>This study maps the intricate journey of patient data across England, identifying critical gaps. Multistage data flow chains compromise transparency and public trust, while adherence to safe data practices remains inadequate. The research advocates for infrastructural reforms and introduces a platform, DataInsights.uk, to enhance transparency and demonstrate the richness of NHS data assets.</p>
        </div>

        {/* Images and Figures */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4">Data Clusters</h2>
          <div className="card bg-white shadow-md p-4 rounded-lg">
            <img src={mapClustersImage} alt="Data Clusters" className="mx-auto" />
          </div>
        </div>

        {/* More content */}

        {/* Related Work */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4">Related Work</h2>
          <div className="card bg-white shadow-md p-4 rounded-lg">
            <p>
              Zhang J, Gallifant J, Pierce RL, et al 
              "<em><a href="https://informatics.bmj.com/content/30/1/e100809">Quantifying digital health inequality across a national healthcare system</a></em>" 
              BMJ Health & Care Informatics 2023;30:e100809. doi: <a href="https://informatics.bmj.com/content/30/1/e100809">10.1136/bmjhci-2023-100809</a>
            </p>
            {/* Additional related works can be added here in similar format */}
          </div>
        </div>

        {/* Citation */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Cite</h2>
          <div className="card bg-white shadow-md p-4 rounded-lg">
            <p className="mb-4">
              Rohit Gandikota, Joanna Materzyńska, Jaden Fiotto-Kaufman, David Bau. 
              "<em>Erasing Concepts from Diffusion Models.</em>" 
              Proceedings of the 2023 IEEE International Conference on Computer Vision (ICCV 2023).
            </p>
            <h3 className="font-semibold">BibTeX</h3>
            <pre className="text-left mx-auto overflow-x-auto whitespace-pre-wrap break-words">
            {`@inproceedings{gandikota2023erasing,
                title={Erasing Concepts from Diffusion Models},
                author={Rohit Gandikota and Joanna Materzyńska and Jaden Fiotto-Kaufman and David Bau},
                booktitle={Proceedings of the 2023 IEEE International Conference on Computer Vision},
                year={2023}
            }`}
            </pre>
          </div>
        </div>

      </div>
    <footer className="bg-gray-100 text-center p-4">
        <Link href="/">
        See more work
        </Link>
    </footer>
    </>
  );
}
