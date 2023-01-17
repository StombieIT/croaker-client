import { takeEvery, call, put, StrictEffect } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getProfileByUserId } from "../../api/profilesApi"
import { IProfile } from "../../models/IProfile"
import { fetchProfile, setProfile } from "./profileSlice"

export function *profileWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchProfile.type, profileWorker)
}

export function *profileWorker(action: PayloadAction<number>): Generator<StrictEffect, void, IProfile> {
    const profile: IProfile = yield call(getProfileByUserId, action.payload)

    yield put(setProfile(profile))
}