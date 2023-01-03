import { Box } from '@mui/system';
import React, { useState } from 'react';
import CreateLink from '../components/Links/CreateLink';
import LinkItem from '../components/Links/LinkItem';
import { FakeLinks } from '../__mocks__/FakeLinks';


const Links = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    mb: 3
                }}
            >
                <CreateLink />
            </Box>
            {
                FakeLinks.map((link) => (
                    <LinkItem
                        key={link.id}
                        title={link}
                    />
                ))
            }
        </>
    )
}

export default Links;