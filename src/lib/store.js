
import {create} from 'zustand'
import { createAuthUserSlice } from './slices/createAuthStore'
import { createStudioSlice } from './slices/createStudioSlice'
import { createUserDetailsSlice} from './slices/createUserStore'
import { createVideoSlice } from './slices/createVideoSlice'



export const useAppStore = create()((...a) => ({
    ...createAuthUserSlice(...a),
    ...createStudioSlice(...a),   
    ...createUserDetailsSlice(...a),
    ...createVideoSlice(...a),
}))