import { createBem as bem, classnames } from '../../utils';

export default function Information({ className, href, title, value }) {
	const info = bem('information');
	return (
		<a className={classnames(className, info())} href={href}>
			<strong className={info('title')}>{title}</strong>
			<span className={info('value')}>{value}</span>
		</a>
	);
}
