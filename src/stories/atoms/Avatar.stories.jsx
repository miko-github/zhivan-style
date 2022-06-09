import Avatar from '../../components/atoms/Avatar';

import AvatarImage from '../../assets/images/avatar.png';

export default {
	title: 'ATOMS/Avatar',
	component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const AliAsadpour = Template.bind({});
AliAsadpour.args = {
	username: 'ali_asadpour',
	displayName: 'علی اسدپور',
	image: AvatarImage,
};

export const AliKarimi = Template.bind({});
AliKarimi.args = {
	username: 'alikarimi',
	displayName: 'علی کریمی',
};

export const CustomUser = Template.bind({});
CustomUser.args = {
	username: 'ws',
	displayName: 'شخص سوم',
};
