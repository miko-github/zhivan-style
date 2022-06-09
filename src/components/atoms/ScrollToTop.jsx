import { createBem as bem, classnames } from '../../utils';
import { IChevronUp } from './Icon';

export default function ScrollToTop({ className }) {
	const scrollToTop = bem('scroll-to-top');
	return (
		<a href='#top-anchor' className={classnames(className, scrollToTop())}>
			<IChevronUp className={scrollToTop('icon')} />
		</a>
	);
}
