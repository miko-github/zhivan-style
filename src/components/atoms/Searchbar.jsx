import { classnames, createBem as bem } from '../../utils';
import { ISearch } from './Icon';

// TODO: { useSearch } from '../hooks'; and use the api to fetch the search results and useSearchList to display them

export default function Searchbar() {
	const search = bem('searchbar');
	return (
		<form className={classnames('searchbar', this.props.className)}>
			<input
				type='text'
				placeholder='جستجوی محصولات'
				className={search('input')}
			/>
			<button className={search('button')} type='button'>
				<ISearch className={search('icon')} />
			</button>
		</form>
	);
}
