import Head from 'next/head';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Mapping and evaluating national data flows: transparency, privacy, and guiding infrastructural transformation</title>
        {/* Add other relevant meta tags here */}
      </Head>

      {/* Author details */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Mapping and Evaluating National Data Flows: Transparency, Privacy, and Guiding Infrastructural Transformation</h1>
          <p className="mb-4">
            Joe Zhang, BMBCh<sup>1,2</sup>,{' '}
            Jess Morley, MS<sup>3</sup>,{' '}
            Jack Gallifant, MSc<sup>4,5</sup>,{' '}
            Chris Oddy, MBBS<sup>6</sup>,{' '}
            Prof James T Teo, PhD<sup>2,7</sup>,{' '}
            Prof Hutan Ashrafian, PhD<sup>1,8</sup>,{' '}
            Prof A Darzi PhD<sup>1</sup>
            <br />
            <span><sup>1</sup>Institute of Global Health Innovation, Imperial College London, London, UK</span><br />
            <span><sup>2</sup>Department of Critical Care, Guys and St Thomas NHS Foundation Trust, London, UK</span><br />
            <span><sup>3</sup>Oxford Internet Institute, University of Oxford, Oxford, UK</span><br />
            <span><sup>4</sup>Department of Intensive Care, Imperial College Healthcare NHS Trust, London, UK</span><br />
            <span><sup>5</sup>Laboratory for Computational Physiology, Massachusetts Institute of Technology, Cambridge, MA, USA</span><br />
            <span><sup>6</sup>Department of Anaesthesia, Critical Care and Pain, St Georges Healthcare NHS Trust, London, UK</span><br />
            <span><sup>7</sup>Department of Neurology, Kings College Hospital NHS Foundation Trust, London, UK</span><br />
            <span><sup>8</sup>Leeds University Business School, Leeds, UK</span><br />
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
