import React from 'react';
import {Box, Breadcrumbs,Link, Typography} from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

export  const MuiBreadcrumbs = () => {
    return <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' maxItems={3} itemsAfterCollapse={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catalogue</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator="-" aria-label='breadcrumb' maxItems={3} itemsBeforeCollapse={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catalogue</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<NavigateNext fontSize='small'/>} aria-label='breadcrumb' maxItems={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catalogue</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
}