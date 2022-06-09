import { createBem as bem, classnames } from '../../utils';
import { ICart } from './Icon';

export default function Card({ className }) {
	const card = bem('card');
	return (
		<section className={classnames(className, card())}>
			<a className={card('link')} href='#/'>
				click here to visit product
			</a>
			<section className={card('thumbnail')}></section>
			<section className={card('caption')}>
				<section className={card('details')}>
					<h3 className={card('title')}>Title</h3>
					<p className={card('description')}>Description</p>
				</section>
				<button type='button' className={card('button')}>
					<ICart className={card('icon')} />
				</button>
			</section>
		</section>
	);
}
