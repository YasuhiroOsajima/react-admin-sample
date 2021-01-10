import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Top page of test dash board.</CardContent>
    </Card>
);