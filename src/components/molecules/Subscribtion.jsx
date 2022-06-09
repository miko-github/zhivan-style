import { classnames, createBem } from '../../utils';

export default function Subscription({
	title,
	placeholder,
	label,
	description,
	className,
}) {
	const subscription = createBem('subscription');
	return (
		<section className={classnames(className, subscription())}>
			<section className={subscription('caption')}>
				<h2 className={subscription('title')}>{title}</h2>
				<p className={subscription('description')}>{description}</p>
			</section>
			<form className={subscription('form')}>
				<input
					type='email'
					placeholder={placeholder}
					className={subscription('email')}
				/>
				<button className={subscription('submit')}>{label}</button>
			</form>
		</section>
	);
}
