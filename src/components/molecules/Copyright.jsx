import { createBem as bem, classnames } from '../../utils';
import ScrollToTop from '../atoms/ScrollToTop';

export default function Copyright({ className }) {
	const copyright = bem('copyright');
	return (
		<section className={classnames(className, copyright())}>
			{/* svg:arc */}
			<ScrollToTop />
			<p className={copyright('text')}>
				تمامی خقوق این سایت متعلق به
				<a href='#/gandom-software-group'>گروه نرم افزاری گندم</a> می
				باشد
			</p>
		</section>
	);
}
