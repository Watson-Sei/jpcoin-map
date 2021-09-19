import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

const Types: { [id: number]: {name: string; img: string;} } = {
    0: {
        name: "bitcoin",
        img: `${process.env.PUBLIC_URL}/bitcoin.svg`
    },
    1: {
        name: "ethereum",
        img: `${process.env.PUBLIC_URL}/ethereum.svg`
    },
    2: {
        name: "nem/xem",
        img: `${process.env.PUBLIC_URL}/nem-xem.svg`
    }
};

function Info(props: { info: { name: string; latitude: number; longitude: number; image: string, kinds: number[]} }) {
    const {info} = props;
    const displayName = `${info.name}`

    const ChipList = props.info.kinds.map((number) => 
        <Chip
            avatar={<Avatar alt="coin" src={Types[number].img} />}
            label={Types[number].name}
            variant="outlined"
        />
    )

    return (
        <div>
            <div>
                {displayName}
            </div>
            <img width={240} src={info.image} alt="" />
            <div>
                <Typography>対応コイン</Typography>
                <Stack direction="row" spacing={1}>
                    {ChipList}
                </Stack>
            </div>
        </div>
    )
}

export default Info;