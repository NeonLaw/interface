import { FlashButton } from '../button';
import React from 'react';
import { SubmissionInProgress } from '../submissionInProgress';
import { SubmitForm } from '../keybindings/submitForm';
import { gutters } from '../../themes/neonLaw';

interface CreateButtonProps {
  dasherizedResourceName: string;
  titlecaseResourceName: string;
  isSubmitting: boolean;
  createMutationLoading: boolean;
}

export const CreateButton = ({
  dasherizedResourceName,
  titlecaseResourceName,
  isSubmitting,
  createMutationLoading,
}: CreateButtonProps) => {
  return (
    <FlashButton
      type="submit"
      data-testid={`update-${dasherizedResourceName}-form-submit`}
      isDisabled={isSubmitting || createMutationLoading}
      containerStyles={{
        margin: `${gutters.xSmallOne} 0`,
        width: '100%',
      }}
      styles={{ width: '100%' }}
      colorScheme="teal"
    >
      Create ${titlecaseResourceName}&nbsp;
      <SubmitForm />
      <SubmissionInProgress loading={createMutationLoading} />
    </FlashButton>
  );
};