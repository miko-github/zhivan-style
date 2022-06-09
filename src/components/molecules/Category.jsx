import { createBem as bem, classnames } from '../../utils';

export default function Category({ className }) {
	const category = bem('category');
	return (
		<section className={classnames(className, category())}>
			<ul className={category('list')}>
				{/*
				HINT : <li className={category('item')}></li>
				TODO : use external component (category-item/category) and rename this to (categories);
				TODO : the category section component  make conflict with the this component
				*/}
			</ul>
		</section>
	);
}
