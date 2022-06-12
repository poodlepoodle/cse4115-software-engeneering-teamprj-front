import { Modal, ModalProps } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { Input, LabelRow, Button } from '../common';

export function SendModal(
  props: Pick<ModalProps, 'visible' | 'onCancel'> & {
    onComplete: (data: { to: string; type: string; amount: number }) => void;
  }
) {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <Modal {...props} centered footer={[]}>
      <Wrapper>
        <LogoImg src="/images/octo/send_asset.png" />
        <LabelRow label="보낼 주소">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="보낼 대상의 주소 입력"
            width={240}
          />
        </LabelRow>
        <LabelRow label="자산">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="보낼 자산 선택"
            width={240}
          />
        </LabelRow>
        <LabelRow label="금액">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="보낼 금액 입력"
            width={240}
          />
        </LabelRow>
        <Button>보내기</Button>
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
