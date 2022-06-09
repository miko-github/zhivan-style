import { Children } from 'react';
import { createBem as bem, classnames } from '../../utils';

export default function Portlet({ className, children, title }) {
	const portlet = bem('portlet');
	return (
		<section className={classnames(className, portlet())}>
			<strong className={portlet('title')}>{title}</strong>
			<ul className={portlet('list')}>
				{Children.map(children, (child) => child)}
			</ul>
		</section>
	);
}
