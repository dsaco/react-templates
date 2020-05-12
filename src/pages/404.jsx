import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Result } from 'antd';

export default function NotFoundPage() {
	const history = useHistory();
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button onClick={history.goBack} type="primary">
					Go Back
				</Button>
			}
		/>
	);
}
