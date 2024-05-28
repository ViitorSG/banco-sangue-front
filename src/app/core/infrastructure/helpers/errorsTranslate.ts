import { messagesDefaultEnum } from '@/domain/Enums/MessagesDefaultEnum'

export function errorsTranslate(erro: string) {
  const errorsDefault = messagesDefaultEnum.ERROR

  const errorsTranslate: {
    [key: string]: string
  } = {
    "Scheduled date can't be on the past": 'A data agendada não pode ser no passado',
    "Campaign already started, you can't modify": 'Campanha já iniciada, não é possível modificá-la',
    "Campaign already started, you can't delete": 'Campanha já iniciada, não é possível excluí-la',
    'User already exist in this account': 'Usuário já existe nesta conta',
    'Update is not allowed because campaign status is FINALIZED':
      'Atualização não permitida porque o status da campanha é FINALIZADO',
    'The user with the provided email already exists (EMAIL_EXISTS).': 'O usuário com o e-mail fornecido já existe.',
    'Customer already exists with this phone': 'Cliente já existe com este telefone',
    'Customer already exist with this phone.': 'Cliente já existe com este telefone',
    INVALID_LOGIN_CREDENTIALS: 'Verifique seu email e senha',
    'Update request needs to contain at least category or a component.':
      'O template precisa conter pelo menos uma categoria ou um componente para ser atualizado.',
    "Can't update template with status PENDING.": 'Não é possível atualizar um template com status Pendente.',
    "Can't update category and components at same time":
      'Não é possível atualizar categoria e componentes ao mesmo tempo',
    "Can't update category of a template with status APPROVED.":
      'Não é possível atualizar a categoria de um template com status Aprovado.',
    "Can't update APPROVED template more than once within 24 hours.":
      'Não é possível atualizar um template com status Aprovado mais de uma vez dentro de um período de 24 horas.'
  }

  if (erro in errorsTranslate) {
    return errorsTranslate[erro]
  } else {
    const similarError = Object.keys(errorsTranslate).find(key => erro?.includes(key))
    if (similarError) {
      return errorsTranslate[similarError]
    } else {
      return errorsDefault
    }
  }
}
