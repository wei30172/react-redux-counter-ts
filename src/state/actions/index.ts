import { ActionType } from '../action-types/index'

interface DepositAction {
  type: ActionType.DEPOSIT,
  payload: number
}

interface WithdrawAction {
  type: ActionType.WITHDRAW,
  payload: number
}

interface ResetAction {
  type: ActionType.RESET
}

export type Action = DepositAction | WithdrawAction | ResetAction