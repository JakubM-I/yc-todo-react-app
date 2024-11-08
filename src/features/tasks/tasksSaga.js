import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, loadExampleTaksError, setExampleTasks, taskSelector } from "./tasksSlice";
import { saveTaskToLocalStorage } from "./utils/localStorage";
import { getExampleTasks } from "./utils/getExampleTasks";

function* fetchExampleTasksWorker() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
    } catch (error) {
        yield put(loadExampleTaksError);
        yield call(alert, "Błąd wgrywania");
    }
}

function* saveTaksToLocalstorageWorker() {
    const tasks = yield select(taskSelector);
    yield call(saveTaskToLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks, fetchExampleTasksWorker);
    yield takeEvery("*", saveTaksToLocalstorageWorker);
}