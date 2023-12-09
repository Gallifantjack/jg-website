import Head from 'next/head';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Disparity Dashboards: An Evaluation of the Literature and Framework for Health Equity Improvement</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Disparity Dashboards: An Evaluation of the Literature and Framework for Health Equity Improvement</h1>
          <p className="mb-4">
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
    
        <div className="flex justify-center space-x-4 mb-8">
          {/* Link to ArXiv Preprint */}
          <a href="https://arxiv.org/pdf/2308.14761.pdf" target="_blank" className="block text-center">
            <img src="/images/paper-thumb.png" alt="ArXiv Preprint thumbnail" className="h-24 w-20 border border-gray-300 mx-auto" />
            <span>ArXiv Preprint</span>
          </a>
          {/* Link to GitHub Source Code */}
          <a href="https://github.com/rohitgandikota/unified-concept-editing" target="_blank" className="block text-center">
            <img src="/images/code-thumb.png" alt="GitHub code thumbnail" className="h-24 w-20 border border-gray-300 mx-auto" />
            <span>Source Code</span>
          </a>
        </div>

        {/* Summary box */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">How to fix multiple issues with diffusion model weights?</h3>
          <p>Text-to-image models suffer from various safety issues that may limit their suitability for deployment. Previous methods have separately addressed individual issues of bias, copyright, and offensive content in text-to-image models. However, in the real world, all of these issues appear simultaneously in the same model.</p>
          <p>In this paper, we present a method that tackles those diverse issues with a single approach. Our method, Unified Concept Editing (UCE), edits the model without training using a closed-form solution conditioned on cross attention outputs, and scales seamlessly to concurrent edits on text-conditional diffusion models.</p>
        </div>

        {/* Images and Figures */}


        {/* More content */}

        {/* Related Work */}
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4">Related Work</h2>
          <div className="card bg-white shadow-md p-4 rounded-lg">
            <p>
              Nupur Kumari, Bingliang Zhang, Sheng-Yu Wang, Eli Shechtman, Richard Zhang, Jun-Yan Zhu 
              "<em><a href="https://www.cs.cmu.edu/~concept-ablation/">Ablating Concepts in Text-to-Image Diffusion Models</a></em>" 
              arXiv preprint <a href="https://arxiv.org/abs/2303.13516">arXiv:2303.13516</a> (2023).
            </p>
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
