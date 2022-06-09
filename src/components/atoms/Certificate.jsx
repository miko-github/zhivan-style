import { classnames, createBem } from '../../utils';

import Enamaad from '../../assets/images/logo/logo-enamaad.png';
import Anjoman from '../../assets/images/logo/logo-anjoman-senfi.png';
import Khalaaq from '../../assets/images/logo/logo-khalaaq.png';
import Eetemaad from '../../assets/images/logo/logo-neshan-eetemaad.png';

const _CERTIFICATES = {
	'ای-نماد': Enamaad,
	'انجمن صنفی': Anjoman,
	'شرکت های خلاق': Khalaaq,
	'نماد اعتماد': Eetemaad,
	Enamaad,
	Anjoman,
	Khalaaq,
	Eetemaad,
};

export default function Certificate({ className, name, caption, thumbnail }) {
	const certificate = createBem('certificate');
	const src = thumbnail ? thumbnail : _CERTIFICATES[name];
	return (
		<figure className={classnames(className, certificate())}>
			<img className={certificate('image')} src={src} alt={name} />
			<figcaption className={certificate('caption')}>
				{caption}
			</figcaption>
		</figure>
	);
}

export const CERTIFICATES = [
	{ name: 'ای-نماد', caption: '', thumbnail: Enamaad },
	{ name: 'انجمن صنفی', caption: '', thumbnail: Anjoman },
	{ name: 'شرکت های خلاق', caption: '', thumbnail: Khalaaq },
	{ name: 'نماد اعتماد', caption: '', thumbnail: Eetemaad },
];
export { Enamaad, Anjoman, Khalaaq, Eetemaad };
