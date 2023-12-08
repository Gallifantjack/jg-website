import Head from 'next/head';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Unified Concept Editing in Diffusion Models</title>
        {/* Add other relevant meta tags here */}
      </Head>

    
      {/* Author details */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Unified Concept Editing in Diffusion Models</h1>
          <p className="mb-4">
            <Link href="/template">Rohit Gandikota<sup>1</sup></Link>,{' '}
            <Link href="/template">Hadas Orad<sup>2</sup></Link>,{' '}
            <Link href="/template">Yonatan Belinkov<sup>2</sup></Link>,{' '}
            <Link href="/template">Joanna Materzyńska<sup>3</sup></Link>,{' '}
            <Link href="/template">David Bau<sup>1</sup></Link>
            <br />
            <span><sup>1</sup>Northeastern University, </span>
            <span><sup>2</sup>Technion - IIT; </span>
            <span><sup>3</sup>MIT CSAIL</span>
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
