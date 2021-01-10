import * as React from "react";

import { List, Datagrid } from 'react-admin';
import { Edit } from 'react-admin';
import { Create } from 'react-admin';

// for Edit and Create
import { SimpleForm, TextInput } from 'react-admin';

// for List culms
import { TextField, EditButton } from 'react-admin';

// Menu Icon
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
export const InstanceIcon = DesktopWindowsIcon

// Components
// List table
export const InstanceList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="uuid" />
            <TextField source="name" />
            <TextField source="owner" />
            <EditButton basePath="/instances" />
        </Datagrid>
    </List>
);

// Edit
const InstanceTitle = ({ record }: any) => {
    return <span>Instance {record ? `"${record.name}"` : ''}</span>;
};

export const InstanceEdit = (props: any) => (
    <Edit title={<InstanceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="uuid" />
            <TextInput source="name" />
            <TextInput source="owner" />
        </SimpleForm>
    </Edit>
);

// Create
export const InstanceCreate = (props: any) => (
    <Create title="Create a Instance" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="owner" />
        </SimpleForm>
    </Create>
);