import { createBem as bem } from '../../utils';

export default function PortletItem({ className, href, text }) {
	const portlet = bem('portlet');
	return (
		<li className={portlet('item')}>
			<a className={portlet('link')} href={href}>
				{text}
			</a>
		</li>
	);
}
