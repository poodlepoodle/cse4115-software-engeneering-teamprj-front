import { Modal, ModalProps } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { Input, LabelRow, Button } from '../common';

export function AddTokenModal(
  props: Pick<ModalProps, 'visible' | 'onCancel'> & {
    onComplete: (data: {
      address: string;
      symbol: string;
      decimal: number;
    }) => void;
  }
) {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <Modal {...props} centered footer={[]}>
      <Wrapper>
        <LogoImg src="/images/octo/custom_token.png" />
        <LabelRow label="토큰 계약 주소">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="토큰 계약 주소 입력"
            width={240}
          />
        </LabelRow>
        <LabelRow label="토큰 기호">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="토큰 기호 입력"
            width={240}
          />
        </LabelRow>
        <LabelRow label="토큰 십진수">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="토큰 십진수 입력"
            width={240}
          />
        </LabelRow>
        <Button>추가하기</Button>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;

  width: 37.2rem;
`;

const LogoImg = styled.img`
  display: flex;
  /* top: -14.2rem; */

  width: 12rem;

  transition: all 0.5s;
  &: hover {
    opacity: 0.5;
  }
`;
