import { Wallet } from '@solana/wallet-adapter-base';
import React, { FC, MouseEventHandler } from 'react';
import { Button } from './Button';
import { WalletIcon } from './WalletIcon';

export interface WalletListItemProps {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({ handleClick, tabIndex, wallet }) => {
    return (
        <li>
            <Button onClick={handleClick} startIcon={<WalletIcon wallet={wallet} />} tabIndex={tabIndex}>
                {wallet.name}
            </Button>
        </li>
    );
};
