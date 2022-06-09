import { classnames, createBem } from '../../utils';
import Certificate, { CERTIFICATES } from '../atoms/Certificate';

export default function CertificateBox({ className }) {
	const certificates = createBem('certificate-box');
	return (
		<section className={classnames(className, certificates())}>
			<ul className={certificates('list')}>
				{CERTIFICATES.map(({ name, caption, thumbnail }) => (
					<li key={name} className={certificates('item')}>
						<Certificate
							name={name}
							caption={caption}
							thumbnail={thumbnail}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
