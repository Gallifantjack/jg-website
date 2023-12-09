import Head from 'next/head';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>A New Tool for Evaluating Health Equity in Academic Journals; the Diversity Factor</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details with hover-over for affiliations using Tailwind CSS */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">A New Tool for Evaluating Health Equity in Academic Journals; the Diversity Factor</h1>
          <p className="mb-4">
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
