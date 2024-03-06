import React from 'react';
import Layout from '@/components/common/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import StyledButton from '../common/StyledButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Resume = () => {
	const [width, setWidth] = React.useState(1200);
	React.useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<Layout title={'My Resume'} id={'resume'}>
			<div className={'flex justify-center items-center mt-10 w-full '}>
				<AnimationOnScroll animateIn={'animate__fadeInLeft'} animateOnce={true}>
					<div className="flex-col flex items-center gap-4">
						<Document file="/Resume.pdf" className="d-flex justify-content-center">
							<Page pageNumber={1} scale={width > 786 ? 1.5 : 0.5} />
						</Document>
						<StyledButton
							onClick={() => {
								var link = document.createElement('a');
								link.href = '/Resume.pdf';
								link.setAttribute('download', 'Atul_Silori_Resume.pdf');
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}
							filled
						>
							<div className="flex gap-x-1">
								<span>Download</span>
								<DownloadForOfflineIcon />
							</div>
						</StyledButton>
					</div>
				</AnimationOnScroll>
			</div>
		</Layout>
	);
};

export default Resume;
