import React from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from '../../components/button/button';
import {Button} from "@material-ui/core";

export default {
    title: 'Styled Button',
};

export const Default = () => (
    <StyledButton onClick={action('Styled button clicked')}>
        Styled Button
    </StyledButton>
);

Default.story = {
    name: "defaultBtn",
};

export const DDD = () => (
    <div>dd</div>
);



export const googleLoginBtn = () => (
    <StyledButton onClick={action('Styled button clicked')}>
        GOogle
    </StyledButton>
);

export const Secondary = () => (
    <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
        Secondary
    </Button>
);
