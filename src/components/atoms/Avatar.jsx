import { classnames, createBem } from '../../utils';

export default function Avatar({ className, username, image, displayName }) {
	const avatar = createBem('avatar');
	return (
		<figure className={classnames(avatar(), className)}>
			<a href='#/users/@/{username}' className={avatar('link')}>
				click here to see the {displayName}
			</a>
			<img
				className={avatar('image')}
				src={
					image ||
					`https://avatars.githubusercontent.com/${username}?s=460&v=4`
				}
				alt={`zhivan style | ${displayName}`}
			/>
			<figcaption className={avatar('caption')}>{displayName}</figcaption>
		</figure>
	);
}
