import { call, select, takeEvery } from "redux-saga/effects";
import { taskSelector } from "./tasksSlice";
import { saveTaskToLocalStorage } from "./utils/localStorage";

function* saveTaksToLocalstorageWorker() {
    const tasks = yield select(taskSelector);
    yield call(saveTaskToLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeEvery("*", saveTaksToLocalstorageWorker);
}