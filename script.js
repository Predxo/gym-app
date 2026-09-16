/* =========================================================
   GYM APP V3
   ========================================================= */


/* ================= EXERCISE DATABASE ================= */

const exercises = [

    {
        id: 1,
        name: "Supino Reto",
        muscle: "Peito",
        focus: "Peitoral",
        alternatives: ["Supino com halteres", "Flexão"]
    },

    {
        id: 2,
        name: "Supino Inclinado",
        muscle: "Peito",
        focus: "Peitoral superior",
        alternatives: ["Supino inclinado com halteres"]
    },

    {
        id: 3,
        name: "Crucifixo",
        muscle: "Peito",
        focus: "Peitoral",
        alternatives: ["Crossover"]
    },

    {
        id: 4,
        name: "Crossover",
        muscle: "Peito",
        focus: "Peitoral",
        alternatives: ["Crucifixo"]
    },

    {
        id: 5,
        name: "Flexão",
        muscle: "Peito",
        focus: "Peitoral",
        alternatives: ["Supino reto"]
    },

    {
        id: 6,
        name: "Puxada Alta",
        muscle: "Costas",
        focus: "Dorsal",
        alternatives: ["Barra fixa"]
    },

    {
        id: 7,
        name: "Remada Curvada",
        muscle: "Costas",
        focus: "Dorsal e espessura",
        alternatives: ["Remada unilateral"]
    },

    {
        id: 8,
        name: "Remada Unilateral",
        muscle: "Costas",
        focus: "Dorsal",
        alternatives: ["Remada curvada"]
    },

    {
        id: 9,
        name: "Remada Baixa",
        muscle: "Costas",
        focus: "Espessura",
        alternatives: ["Remada máquina"]
    },

    {
        id: 10,
        name: "Barra Fixa",
        muscle: "Costas",
        focus: "Dorsal",
        alternatives: ["Puxada alta"]
    },

    {
        id: 11,
        name: "Desenvolvimento",
        muscle: "Ombros",
        focus: "Deltoide anterior",
        alternatives: ["Desenvolvimento com halteres"]
    },

    {
        id: 12,
        name: "Elevação Lateral",
        muscle: "Ombros",
        focus: "Deltoide lateral",
        alternatives: ["Elevação lateral na polia"]
    },

    {
        id: 13,
        name: "Elevação Frontal",
        muscle: "Ombros",
        focus: "Deltoide anterior",
        alternatives: ["Desenvolvimento"]
    },

    {
        id: 14,
        name: "Face Pull",
        muscle: "Ombros",
        focus: "Deltoide posterior",
        alternatives: ["Crucifixo inverso"]
    },

    {
        id: 15,
        name: "Rosca Direta",
        muscle: "Bíceps",
        focus: "Bíceps",
        alternatives: ["Rosca alternada"]
    },

    {
        id: 16,
        name: "Rosca Alternada",
        muscle: "Bíceps",
        focus: "Bíceps",
        alternatives: ["Rosca direta"]
    },

    {
        id: 17,
        name: "Rosca Martelo",
        muscle: "Bíceps",
        focus: "Braquial e antebraço",
        alternatives: ["Rosca martelo na corda"]
    },

    {
        id: 18,
        name: "Rosca Inclinada",
        muscle: "Bíceps",
        focus: "Cabeça longa",
        alternatives: ["Rosca alternada"]
    },

    {
        id: 19,
        name: "Tríceps Pulley",
        muscle: "Tríceps",
        focus: "Tríceps",
        alternatives: ["Tríceps corda"]
    },

    {
        id: 20,
        name: "Tríceps Corda",
        muscle: "Tríceps",
        focus: "Tríceps",
        alternatives: ["Tríceps pulley"]
    },

    {
        id: 21,
        name: "Tríceps Testa",
        muscle: "Tríceps",
        focus: "Tríceps",
        alternatives: ["Tríceps francês"]
    },

    {
        id: 22,
        name: "Tríceps Francês",
        muscle: "Tríceps",
        focus: "Cabeça longa",
        alternatives: ["Tríceps testa"]
    },

    {
        id: 23,
        name: "Agachamento",
        muscle: "Quadríceps",
        focus: "Quadríceps e glúteos",
        alternatives: ["Leg press"]
    },

    {
        id: 24,
        name: "Leg Press",
        muscle: "Quadríceps",
        focus: "Quadríceps",
        alternatives: ["Agachamento"]
    },

    {
        id: 25,
        name: "Cadeira Extensora",
        muscle: "Quadríceps",
        focus: "Quadríceps",
        alternatives: ["Agachamento"]
    },

    {
        id: 26,
        name: "Mesa Flexora",
        muscle: "Posterior",
        focus: "Posterior de coxa",
        alternatives: ["Flexora sentada"]
    },

    {
        id: 27,
        name: "Stiff",
        muscle: "Posterior",
        focus: "Posterior e glúteos",
        alternatives: ["Levantamento terra romeno"]
    },

    {
        id: 28,
        name: "Hip Thrust",
        muscle: "Glúteos",
        focus: "Glúteos",
        alternatives: ["Elevação pélvica"]
    },

    {
        id: 29,
        name: "Panturrilha em Pé",
        muscle: "Panturrilha",
        focus: "Panturrilha",
        alternatives: ["Panturrilha sentado"]
    },

    {
        id: 30,
        name: "Abdominal",
        muscle: "Abdômen",
        focus: "Abdômen",
        alternatives: ["Elevação de pernas"]
    }

];


/* ================= APP DATA ================= */

let data = {

    user: {
        name: "",
        age: null
    },

    xp: 0,

    workouts: [],

    history: [],

    records: {
        maxWeight: 0
    }

};


/* ================= STATE ================= */

let editingWorkoutId = null;

let activeWorkout = null;

let confirmCallback = null;


/* ================= CONSTANTS ================= */

const STORAGE_KEY_V2 = "gymAppV2";

const STORAGE_KEY_V3 = "gymAppV3";

const MIN_SETS = 1;

const MAX_SETS = 4;

const DEFAULT_SETS = 3;

const MAX_REPS = 15;

const WEEKDAYS = [
    "DOM",
    "SEG",
    "TER",
    "QUA",
    "QUI",
    "SEX",
    "SÁB"
];


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    loadData();

    renderWorkoutSelector([]);

    updateAll();

    if (!data.user.name) {
        openRegistration();
    }

});


/* ================= LOCAL STORAGE ================= */

function saveData() {

    localStorage.setItem(
        STORAGE_KEY_V3,
        JSON.stringify(data)
    );

}


/* ================= DATA MIGRATION ================= */

function migrateWorkout(workout) {

    if (
        !workout ||
        !Array.isArray(workout.exercises)
    ) {

        return workout;

    }


    let days =
        Array.isArray(workout.days)
            ? workout.days
            : [];


    workout.days =
        days
            .map(Number)
            .filter(
                day =>
                    day >= 0 &&
                    day <= 6
            );


    workout.exercises =
        workout.exercises.map(
            exercise => {

                let sets =
                    Number(
                        exercise.sets
                    );


                if (
                    !sets ||
                    sets < MIN_SETS ||
                    sets > MAX_SETS
                ) {

                    sets =
                        DEFAULT_SETS;

                }


                return {

                    ...exercise,

                    sets

                };

            }
        );


    return workout;

}


function migrateHistoryItem(item) {

    if (!item || !Array.isArray(item.exercises)) {
        return item;
    }


    item.exercises =
        item.exercises.map(exercise => {

            if (Array.isArray(exercise.sets)) {

                return exercise;

            }


            return {
                ...exercise,

                sets: [
                    {
                        weight:
                            Number(exercise.weight) || 0,

                        reps:
                            Number(exercise.reps) || 0
                    }
                ]
            };

        });


    return item;

}


function normalizeData() {

    data.workouts =
        Array.isArray(data.workouts)
            ? data.workouts.map(migrateWorkout)
            : [];


    data.history =
        Array.isArray(data.history)
            ? data.history.map(migrateHistoryItem)
            : [];


    if (!data.records) {

        data.records = {
            maxWeight: 0
        };

    }


    if (
        typeof data.records.maxWeight !== "number"
    ) {

        data.records.maxWeight =
            Number(data.records.maxWeight) || 0;

    }

}


/* ================= LOAD DATA ================= */

function loadData() {

    let saved =
        localStorage.getItem(STORAGE_KEY_V3);


    let usingOldVersion = false;


    if (!saved) {

        saved =
            localStorage.getItem(STORAGE_KEY_V2);

        usingOldVersion = Boolean(saved);

    }


    if (!saved) {
        return;
    }


    try {

        const parsed =
            JSON.parse(saved);


        data = {

            ...data,

            ...parsed,

            user: {
                ...data.user,
                ...(parsed.user || {})
            },

            records: {
                ...data.records,
                ...(parsed.records || {})
            }

        };


        normalizeData();


        if (usingOldVersion) {

            saveData();

            console.log(
                "GYM APP: dados da V2 migrados para V3."
            );

        }

    } catch (error) {

        console.error(
            "Erro ao carregar dados:",
            error
        );

    }

}


/* ================= TOAST ================= */

function showToast(message, type = "info") {

    const toast =
        document.getElementById("appToast");


    toast.textContent = message;


    toast.className =
        `toast ${type} show`;


    clearTimeout(window.toastTimeout);


    window.toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* ================= CONFIRM ================= */

function showConfirm(message, callback) {

    const modal =
        document.getElementById("confirmModal");


    const messageElement =
        document.getElementById("confirmMessage");


    const okButton =
        document.getElementById("confirmOk");


    messageElement.textContent =
        message;


    confirmCallback =
        callback;


    modal.classList.add("show");


    okButton.onclick = () => {

        const action =
            confirmCallback;


        closeConfirm();


        if (action) {
            action();
        }

    };

}


function closeConfirm() {

    const modal =
        document.getElementById("confirmModal");


    modal.classList.remove("show");


    confirmCallback = null;

}


/* ================= PAGE NAVIGATION ================= */

function showPage(pageId, clickedButton = null) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add("active");

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        const matchingButton =
            document.querySelector(
                `.nav-btn[onclick*="'${pageId}'"]`
            );


        if (matchingButton) {

            matchingButton.classList.add("active");

        }

    }

}


/* ================= REGISTRATION ================= */

function openRegistration() {

    document
        .getElementById("registrationModal")
        .classList.add("show");

}


function finishRegistration() {

    const name =
        document
            .getElementById("registrationName")
            .value
            .trim();


    const age =
        Number(
            document
                .getElementById("registrationAge")
                .value
        );


    if (!name) {

        showToast(
            "Digite seu nome.",
            "error"
        );

        return;

    }


    if (!age || age < 10 || age > 100) {

        showToast(
            "Digite uma idade válida.",
            "error"
        );

        return;

    }


    data.user.name =
        name;


    data.user.age =
        age;


    saveData();


    document
        .getElementById("registrationModal")
        .classList.remove("show");


    updateAll();


    showToast(
        `Bem-vindo, ${name}! 💪`,
        "success"
    );

}


/* ================= DASHBOARD ================= */

function updateDashboard() {

    const level =
        calculateLevel(data.xp);


    const xpForCurrent =
        (level - 1) * 100;


    const currentLevelXP =
        data.xp - xpForCurrent;


    const progress =
        Math.min(
            100,
            (currentLevelXP / 100) * 100
        );


    document
        .getElementById("dashboardName")
        .textContent =
        data.user.name || "Atleta";


    document
        .getElementById("headerLevel")
        .textContent =
        level;


    document
        .getElementById("xpLevel")
        .textContent =
        level;


    document
        .getElementById("profileLevel")
        .textContent =
        level;


    document
        .getElementById("xpValue")
        .textContent =
        data.xp;


    document
        .getElementById("currentXP")
        .textContent =
        currentLevelXP;


    document
        .getElementById("nextXP")
        .textContent =
        100;


    document
        .getElementById("xpProgress")
        .style.width =
        `${progress}%`;


    document
        .getElementById("workoutCount")
        .textContent =
        data.history.length;


    document
        .getElementById("recordValue")
        .textContent =
        formatNumber(
            data.records.maxWeight
        );


    document
        .getElementById("streakValue")
        .textContent =
        calculateStreak();


    if (progress >= 100) {

        document
            .getElementById("xpMessage")
            .textContent =
            "🔥 Você subiu de nível!";

    } else {

        document
            .getElementById("xpMessage")
            .textContent =
            `${100 - currentLevelXP} XP para o próximo nível.`;

    }


    renderLastWorkout();

    renderTodayWorkouts();

}

function renderTodayWorkouts() {

    const container =
        document.getElementById(
            "todayWorkoutList"
        );


    if (!container) return;


    // 0 = Domingo
    // 1 = Segunda
    // 2 = Terça
    // 3 = Quarta
    // 4 = Quinta
    // 5 = Sexta
    // 6 = Sábado

    const today =
        new Date().getDay();


    const todayWorkouts =
        data.workouts.filter(
            workout =>
                Array.isArray(workout.days) &&
                workout.days.includes(today)
        );


    // ================= NENHUM TREINO =================

    if (!todayWorkouts.length) {

        container.innerHTML = `

            <div class="today-empty">

                <div class="today-empty-icon">
                    😴
                </div>

                <strong>
                    Nenhum treino programado para hoje.
                </strong>

                <p>
                    Você pode definir os dias na edição dos seus treinos.
                </p>

            </div>

        `;

        return;

    }


    // ================= TREINOS DE HOJE =================

    container.innerHTML =
        todayWorkouts
            .map(workout => `

                <div class="today-workout-card">

                    <div class="today-workout-main">

                        <div class="today-workout-icon">
                            🏋️
                        </div>

                        <div class="today-workout-info">

                            <span class="section-label">
                                TREINO DE HOJE
                            </span>

                            <h3>
                                ${workout.name}
                            </h3>

                            <p>
                                ${workout.exercises.length}
                                exercício${
                                    workout.exercises.length === 1
                                        ? ""
                                        : "s"
                                }
                            </p>

                        </div>

                    </div>


                    <button
                        class="primary-btn"
                        onclick="startWorkout(${workout.id})"
                    >
                        INICIAR →
                    </button>

                </div>

            `)
            .join("");

}


function calculateLevel(xp) {

    return Math.floor(xp / 100) + 1;

}


function calculateStreak() {

    if (!data.history.length) {
        return 0;
    }


    const dates =
        data.history
            .map(item => item.date)
            .sort()
            .reverse();


    let streak = 1;


    for (
        let i = 0;
        i < dates.length - 1;
        i++
    ) {

        const current =
            new Date(dates[i]);


        const previous =
            new Date(dates[i + 1]);


        const difference =
            Math.round(
                (current - previous) /
                (1000 * 60 * 60 * 24)
            );


        if (difference <= 1) {

            streak++;

        } else {

            break;

        }

    }


    return streak;

}


/* ================= XP ================= */

function addXP(amount) {

    data.xp += amount;

    saveData();

}


/* ================= WORKOUT SELECTOR ================= */

function renderWorkoutSelector(selectedIds = []) {

    const container =
        document.getElementById(
            "workoutExerciseSelector"
        );


    if (!container) return;


    const selectedSet =
        new Set(
            selectedIds.map(String)
        );


    container.innerHTML =
        exercises
            .map(exercise => `

                <label class="exercise-selector">

                    <input
                        type="checkbox"
                        value="${exercise.id}"
                        ${
                            selectedSet.has(
                                String(exercise.id)
                            )
                                ? "checked"
                                : ""
                        }
                        onchange="updateSelectedExerciseCount()"
                    >

                    <span>
                        ${escapeHTML(exercise.name)}
                    </span>

                </label>

            `)
            .join("");


    updateSelectedExerciseCount();

}


/* ================= SELECTED COUNT ================= */

function updateSelectedExerciseCount() {

    const selected =
        document.querySelectorAll(
            "#workoutExerciseSelector input:checked"
        );


    const counter =
        document.getElementById(
            "selectedExerciseCount"
        );


    if (counter) {

        counter.textContent =
            `${selected.length} selecionado${
                selected.length === 1
                    ? ""
                    : "s"
            }`;

    }

}


/* ================= WORKOUT MODAL ================= */
function openWorkoutModal(workoutId = null) {

    editingWorkoutId =
        workoutId;


    const modal =
        document.getElementById(
            "workoutModal"
        );


    const title =
        document.getElementById(
            "workoutModalTitle"
        );


    if (workoutId) {

        const workout =
            data.workouts.find(
                item =>
                    item.id === workoutId
            );


        if (!workout) return;


        title.textContent =
            "EDITAR TREINO";


        document
            .getElementById(
                "workoutName"
            )
            .value =
            workout.name;


        renderWorkoutSelector(
            workout.exercises.map(
                exercise =>
                    exercise.id
            )
        );


        setSelectedWorkoutDays(
            workout.days || []
        );

    } else {

        title.textContent =
            "CRIAR TREINO";


        document
            .getElementById(
                "workoutName"
            )
            .value =
            "";


        renderWorkoutSelector([]);


        setSelectedWorkoutDays([]);

    }


    document
        .getElementById(
            "customExerciseForm"
        )
        .classList.add("hidden");


    modal.classList.add("show");

}

function closeWorkoutModal() {

    document
        .getElementById("workoutModal")
        .classList.remove("show");


    editingWorkoutId =
        null;

}


/* ================= CUSTOM EXERCISE ================= */

function toggleCustomExercise() {

    document
        .getElementById("customExerciseForm")
        .classList.toggle("hidden");

}


function addCustomExercise() {

    const name =
        document
            .getElementById(
                "customExerciseName"
            )
            .value
            .trim();


    const muscle =
        document
            .getElementById(
                "customExerciseMuscle"
            )
            .value;


    const focus =
        document
            .getElementById(
                "customExerciseFocus"
            )
            .value
            .trim() ||
        muscle;


    if (!name) {

        showToast(
            "Digite o nome do exercício.",
            "error"
        );

        return;

    }


    const selectedIds =
        [
            ...document.querySelectorAll(
                "#workoutExerciseSelector input:checked"
            )
        ].map(
            input =>
                input.value
        );


    const newExercise = {

        id:
            `custom-${Date.now()}`,

        name,

        muscle,

        focus,

        alternatives: []

    };


    exercises.push(
        newExercise
    );


    renderWorkoutSelector([
        ...selectedIds,
        newExercise.id
    ]);


    document
        .getElementById(
            "customExerciseName"
        )
        .value =
        "";


    document
        .getElementById(
            "customExerciseFocus"
        )
        .value =
        "";


    document
        .getElementById(
            "customExerciseForm"
        )
        .classList.add("hidden");


    showToast(
        `${name} adicionado ao treino!`,
        "success"
    );

}

/* ================= WORKOUT DAYS ================= */

function getSelectedWorkoutDays() {

    return [
        ...document.querySelectorAll(
            'input[name="workoutDay"]:checked'
        )
    ].map(input => Number(input.value));

}


function setSelectedWorkoutDays(days = []) {

    const selectedDays =
        new Set(
            days.map(Number)
        );


    document
        .querySelectorAll(
            'input[name="workoutDay"]'
        )
        .forEach(input => {

            input.checked =
                selectedDays.has(
                    Number(input.value)
                );

        });


    updateSelectedDayCount();

}


function updateSelectedDayCount() {

    const selectedDays =
        getSelectedWorkoutDays();


    const counter =
        document.getElementById(
            "selectedDayCount"
        );


    if (!counter) return;


    counter.textContent =
        `${selectedDays.length} ${
            selectedDays.length === 1
                ? "dia"
                : "dias"
        }`;

}


function getTodayDay() {

    return new Date().getDay();

}


function getTodayName() {

    return WEEKDAYS[
        getTodayDay()
    ];

}

/* ================= SAVE WORKOUT ================= */

function saveWorkout() {

    const name =
        document
            .getElementById("workoutName")
            .value
            .trim();


    const selectedInputs =
        [
            ...document.querySelectorAll(
                "#workoutExerciseSelector input:checked"
            )
        ];


    if (!name) {

        showToast(
            "Digite um nome para o treino.",
            "error"
        );

        return;

    }


    if (!selectedInputs.length) {

        showToast(
            "Escolha pelo menos um exercício.",
            "error"
        );

        return;

    }


    const selectedExercises =
        selectedInputs.map(input => {

            const exercise =
                exercises.find(
                    item =>
                        String(item.id) ===
                        String(input.value)
                );


            return {
                id: exercise.id,
                name: exercise.name,
                muscle: exercise.muscle,
                focus: exercise.focus,

                // Mantém o sistema de séries da V3
                sets:
                    exercise.sets ||
                    DEFAULT_SETS
            };

        });


    // ================= DIAS DA SEMANA =================

    const selectedDays =
        getSelectedWorkoutDays();


    // ================= SALVAR =================

    if (editingWorkoutId) {

        const workout =
            data.workouts.find(
                item =>
                    item.id === editingWorkoutId
            );


        if (workout) {

            workout.name =
                name;

            workout.exercises =
                selectedExercises;

            workout.days =
                selectedDays;

        }


        showToast(
            "Treino atualizado!",
            "success"
        );

    } else {

        const newWorkout = {

            id:
                Date.now(),

            name,

            exercises:
                selectedExercises,

            days:
                selectedDays,

            createdAt:
                new Date().toISOString()

        };


        data.workouts.push(
            newWorkout
        );


        showToast(
            "Treino criado com sucesso!",
            "success"
        );

    }


    saveData();

    closeWorkoutModal();

    renderWorkouts();

    updateDashboard();

}


/* ================= RENDER WORKOUTS ================= */

function renderWorkouts() {

    const container =
        document.getElementById(
            "workoutList"
        );


    if (!data.workouts.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    Você ainda não tem treinos.
                </strong>

                <p>
                    Crie seu primeiro treino para começar.
                </p>

                <br>

                <button
                    class="primary-btn"
                    onclick="openWorkoutModal()"
                >
                    + CRIAR PRIMEIRO TREINO
                </button>

            </div>

        `;

        return;

    }


    container.innerHTML =
        data.workouts
            .map(workout => {

                const days =
                    Array.isArray(workout.days)
                        ? workout.days
                        : [];


                return `

                    <div class="workout-card">

                        <div class="workout-card-header">

                            <div>

                                <span class="section-label">
                                    TREINO
                                </span>

                                <h3>
                                    ${escapeHTML(
                                        workout.name
                                    )}
                                </h3>

                                <p>
                                    ${
                                        workout.exercises.length
                                    }
                                    exercício${
                                        workout.exercises.length === 1
                                            ? ""
                                            : "s"
                                    }
                                </p>

                            </div>


                            <div class="workout-menu">

                                <button
                                    class="icon-btn"
                                    onclick="openWorkoutModal(${workout.id})"
                                    title="Editar"
                                >
                                    ✎
                                </button>

                                <button
                                    class="icon-btn delete"
                                    onclick="deleteWorkout(${workout.id})"
                                    title="Excluir"
                                >
                                    ×
                                </button>

                            </div>

                        </div>


                        ${
                            days.length
                                ? `

                                    <div class="workout-schedule">

                                        ${days
                                            .sort(
                                                (a, b) =>
                                                    getDayOrder(a) -
                                                    getDayOrder(b)
                                            )
                                            .map(
                                                day => `
                                                    <span>
                                                        ${WEEKDAYS[day]}
                                                    </span>
                                                `
                                            )
                                            .join("")}

                                    </div>

                                `
                                : ""
                        }


                        <div class="workout-exercises">

                            ${
                                workout.exercises
                                    .slice(0, 8)
                                    .map(
                                        exercise => `

                                            <span>
                                                ${escapeHTML(
                                                    exercise.name
                                                )}
                                                · ${
                                                    normalizeSetCount(
                                                        exercise.sets
                                                    )
                                                } séries
                                            </span>

                                        `
                                    )
                                    .join("")
                            }


                            ${
                                workout.exercises.length > 8
                                    ? `<span>
                                        +${
                                            workout.exercises.length -
                                            8
                                        }
                                    </span>`
                                    : ""
                            }

                        </div>


                        <div class="workout-card-footer">

                            <small>
                                Criado em
                                ${formatDate(
                                    workout.createdAt
                                )}
                            </small>

                            <button
                                class="primary-btn"
                                onclick="startWorkout(${workout.id})"
                            >
                                INICIAR →
                            </button>

                        </div>

                    </div>

                `;

            })
            .join("");

}

function getDayOrder(day) {

    /*
       Segunda começa primeiro na interface.
       Domingo fica por último.
    */

    if (day === 0) {
        return 7;
    }

    return day;

}


/* ================= DELETE WORKOUT ================= */

function deleteWorkout(id) {

    const workout =
        data.workouts.find(
            item =>
                item.id === id
        );


    if (!workout) return;


    showConfirm(
        `Tem certeza que deseja excluir o treino "${workout.name}"?`,
        () => {

            data.workouts =
                data.workouts.filter(
                    item =>
                        item.id !== id
                );


            saveData();

            renderWorkouts();

            updateDashboard();


            showToast(
                "Treino excluído.",
                "success"
            );

        }
    );

}

/* ================= TODAY'S WORKOUT ================= */

function renderTodayWorkouts() {

    const container =
        document.getElementById(
            "todayWorkoutList"
        );


    if (!container) return;


    const today =
        getTodayDay();


    const todayWorkouts =
        data.workouts.filter(
            workout =>
                Array.isArray(
                    workout.days
                ) &&
                workout.days.includes(
                    today
                )
        );


    if (!todayWorkouts.length) {

        container.innerHTML = `

            <div class="today-empty">

                <div class="today-empty-icon">
                    😴
                </div>

                <strong>
                    Nenhum treino programado para hoje.
                </strong>

                <p>
                    Aproveite para descansar ou programe um treino para este dia.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        todayWorkouts
            .map(workout => {

                const days =
                    Array.isArray(
                        workout.days
                    )
                        ? workout.days
                        : [];


                const muscles =
                    [
                        ...new Set(
                            workout.exercises
                                .map(
                                    exercise =>
                                        exercise.muscle
                                )
                        )
                    ]
                    .slice(0, 4)
                    .join(" • ");


                return `

                    <div class="today-workout-card">

                        <div class="today-workout-main">

                            <div class="today-workout-icon">
                                🏋
                            </div>


                            <div class="today-workout-info">

                                <span class="section-label">
                                    ${getTodayName()}
                                </span>

                                <h3>
                                    ${escapeHTML(
                                        workout.name
                                    )}
                                </h3>

                                <p>
                                    ${
                                        muscles ||
                                        "Treino personalizado"
                                    }
                                </p>


                                <div class="today-workout-days">

                                    ${days
                                        .sort(
                                            (a, b) =>
                                                getDayOrder(a) -
                                                getDayOrder(b)
                                        )
                                        .map(
                                            day => `
                                                <span>
                                                    ${WEEKDAYS[day]}
                                                </span>
                                            `
                                        )
                                        .join("")}

                                </div>

                            </div>

                        </div>


                        <button
                            class="primary-btn"
                            onclick="startWorkout(${workout.id})"
                        >
                            INICIAR →
                        </button>

                    </div>

                `;

            })
            .join("");

}


/* ================= START WORKOUT ================= */

function startWorkout(id) {

    const workout =
        data.workouts.find(
            item =>
                item.id === id
        );


    if (!workout) return;


    activeWorkout = {

        workoutId:
            workout.id,

        name:
            workout.name,

        exercises:
            workout.exercises.map(
                exercise => ({

                    ...exercise,

                    sets:
                        createTrainingSets(
                            exercise.sets
                        )

                })
            )

    };


    renderTraining();


    document
        .getElementById(
            "trainingModal"
        )
        .classList.add("show");

}


/* ================= CREATE SETS ================= */

function createTrainingSets(setCount) {

    const count =
        normalizeSetCount(
            setCount
        );


    return Array.from(
        {
            length: count
        },
        () => ({

            weight: 0,

            reps: 0

        })
    );

}


function normalizeSetCount(setCount) {

    let count =
        Number(setCount);


    if (
        !count ||
        count < MIN_SETS ||
        count > MAX_SETS
    ) {

        count =
            DEFAULT_SETS;

    }


    return Math.min(
        MAX_SETS,
        Math.max(
            MIN_SETS,
            Math.floor(count)
        )
    );

}


/* ================= CLOSE TRAINING ================= */

function closeTrainingModal() {

    document
        .getElementById(
            "trainingModal"
        )
        .classList.remove("show");


    activeWorkout =
        null;

}


/* ================= RENDER TRAINING ================= */

function renderTraining() {

    if (!activeWorkout) {
        return;
    }


    document
        .getElementById(
            "trainingTitle"
        )
        .textContent =
        activeWorkout.name.toUpperCase();


    document
        .getElementById(
            "trainingExerciseCount"
        )
        .textContent =
        activeWorkout.exercises.length;


    const container =
        document.getElementById(
            "trainingExercises"
        );


    container.innerHTML =
        activeWorkout.exercises
            .map(
                (exercise, exerciseIndex) => {

                    return `

                        <div class="training-exercise">

                            <div class="training-exercise-header">

                                <div>

                                    <span>
                                        ${escapeHTML(
                                            exercise.muscle
                                        )}
                                    </span>

                                    <h3>
                                        ${escapeHTML(
                                            exercise.name
                                        )}
                                    </h3>

                                </div>

                                <span>
                                    ${
                                        exercise.sets.length
                                    }/${
                                        MAX_SETS
                                    } SÉRIES
                                </span>

                            </div>


                            <div class="sets-container">

                                ${
                                    exercise.sets
                                        .map(
                                            (set, setIndex) => `

                                                <div class="set-row">

                                                    <div class="set-number">
                                                        ${setIndex + 1}
                                                    </div>


                                                    <!-- PESO -->

                                                    <div class="set-input-group">

                                                        <label
                                                            class="set-input-label"
                                                        >
                                                            PESO — KG
                                                        </label>

                                                        <input
                                                            class="set-input"
                                                            type="number"
                                                            min="0"
                                                            step="0.5"
                                                            value="${
                                                                set.weight
                                                            }"
                                                            id="weight-${exerciseIndex}-${setIndex}"
                                                            oninput="
                                                                updateSetInput(
                                                                    ${exerciseIndex},
                                                                    ${setIndex},
                                                                    'weight',
                                                                    this.value
                                                                )
                                                            "
                                                        >

                                                    </div>


                                                    <!-- REPS -->

                                                    <div class="set-input-group">

                                                        <label
                                                            class="set-input-label"
                                                        >
                                                            REPS — MÁX. 15
                                                        </label>

                                                        <input
                                                            class="set-input"
                                                            type="number"
                                                            min="0"
                                                            max="15"
                                                            step="1"
                                                            value="${
                                                                set.reps
                                                            }"
                                                            id="reps-${exerciseIndex}-${setIndex}"
                                                            inputmode="numeric"
                                                            oninput="
                                                                updateSetInput(
                                                                    ${exerciseIndex},
                                                                    ${setIndex},
                                                                    'reps',
                                                                    this.value
                                                                )
                                                            "
                                                        >

                                                    </div>


                                                    <!-- REMOVE -->

                                                    <button
                                                        class="remove-set-btn"
                                                        onclick="
                                                            removeSet(
                                                                ${exerciseIndex},
                                                                ${setIndex}
                                                            )
                                                        "
                                                        title="Remover série"
                                                    >
                                                        ×
                                                    </button>

                                                </div>


                                                <div
                                                    id="rep-message-${exerciseIndex}-${setIndex}"
                                                    class="rep-recommendation"
                                                ></div>

                                            `
                                        )
                                        .join("")
                                }


                                ${
                                    exercise.sets.length <
                                    MAX_SETS
                                        ? `

                                            <button
                                                class="add-set-btn"
                                                onclick="
                                                    addSet(
                                                        ${exerciseIndex}
                                                    )
                                                "
                                            >
                                                + ADICIONAR SÉRIE
                                            </button>

                                        `
                                        : `

                                            <div class="sets-limit-message">
                                                LIMITE DE 4 SÉRIES ATINGIDO
                                            </div>

                                        `
                                }


                                <div
                                    class="exercise-volume"
                                    id="exercise-volume-${exerciseIndex}"
                                >
                                    Volume:
                                    <strong>0 kg</strong>
                                </div>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


    renderAllRepMessages();

    updateTrainingVolume();

}


/* ================= UPDATE SET INPUT ================= */

function updateSetInput(
    exerciseIndex,
    setIndex,
    type,
    value
) {

    if (!activeWorkout) {
        return;
    }


    const exercise =
        activeWorkout.exercises[
            exerciseIndex
        ];


    if (!exercise) {
        return;
    }


    const set =
        exercise.sets[
            setIndex
        ];


    if (!set) {
        return;
    }


    let numericValue =
        Number(value) || 0;


    if (numericValue < 0) {
        numericValue = 0;
    }


    if (type === "weight") {

        numericValue =
            Math.max(
                0,
                numericValue
            );

    }


    if (type === "reps") {

        numericValue =
            Math.min(
                MAX_REPS,
                Math.floor(
                    numericValue
                )
            );

    }


    set[type] =
        numericValue;


    const input =
        document.getElementById(
            `${type}-${exerciseIndex}-${setIndex}`
        );


    if (input) {

        input.value =
            numericValue;

    }


    updateRepMessage(
        exerciseIndex,
        setIndex
    );


    updateTrainingVolume();

}


/* ================= ADD SET ================= */

function addSet(exerciseIndex) {

    if (!activeWorkout) {
        return;
    }


    const exercise =
        activeWorkout.exercises[
            exerciseIndex
        ];


    if (!exercise) {
        return;
    }


    if (
        exercise.sets.length >=
        MAX_SETS
    ) {

        showToast(
            "Cada exercício pode ter no máximo 4 séries.",
            "info"
        );

        return;

    }


    exercise.sets.push({

        weight: 0,

        reps: 0

    });


    renderTraining();

}


/* ================= REMOVE SET ================= */

function removeSet(
    exerciseIndex,
    setIndex
) {

    if (!activeWorkout) {
        return;
    }


    const exercise =
        activeWorkout.exercises[
            exerciseIndex
        ];


    if (!exercise) {
        return;
    }


    if (
        exercise.sets.length <=
        MIN_SETS
    ) {

        showToast(
            "Cada exercício precisa ter pelo menos 1 série.",
            "info"
        );

        return;

    }


    exercise.sets.splice(
        setIndex,
        1
    );


    renderTraining();

}


/* ================= REP MESSAGE ================= */

function updateRepMessage(
    exerciseIndex,
    setIndex
) {

    const set =
        activeWorkout
            ?.exercises?.[
                exerciseIndex
            ]?.sets?.[
                setIndex
            ];


    if (!set) {
        return;
    }


    const message =
        document.getElementById(
            `rep-message-${exerciseIndex}-${setIndex}`
        );


    if (!message) {
        return;
    }


    if (
        Number(set.reps) ===
        MAX_REPS
    ) {

        message.textContent =
            "🔥 Você chegou ao limite de 15 reps! Considere aumentar o peso.";

        message.classList.add(
            "show"
        );

    } else {

        message.textContent =
            "";

        message.classList.remove(
            "show"
        );

    }

}


/* ================= ALL REP MESSAGES ================= */

function renderAllRepMessages() {

    if (!activeWorkout) {
        return;
    }


    activeWorkout.exercises
        .forEach(
            (exercise, exerciseIndex) => {

                exercise.sets
                    .forEach(
                        (_, setIndex) => {

                            updateRepMessage(
                                exerciseIndex,
                                setIndex
                            );

                        }
                    );

            }
        );

}


/* ================= EXERCISE VOLUME ================= */

function calculateExerciseVolume(
    exercise
) {

    if (
        !exercise ||
        !Array.isArray(
            exercise.sets
        )
    ) {

        return 0;

    }


    return exercise.sets.reduce(
        (total, set) => {

            const weight =
                Number(set.weight) || 0;


            const reps =
                Number(set.reps) || 0;


            return total +
                weight * reps;

        },
        0
    );

}


/* ================= TRAINING VOLUME ================= */

function updateTrainingVolume() {

    if (!activeWorkout) {
        return;
    }


    let totalVolume = 0;


    activeWorkout.exercises
        .forEach(
            (exercise, exerciseIndex) => {

                const exerciseVolume =
                    calculateExerciseVolume(
                        exercise
                    );


                totalVolume +=
                    exerciseVolume;


                const volumeElement =
                    document.getElementById(
                        `exercise-volume-${exerciseIndex}`
                    );


                if (volumeElement) {

                    volumeElement.innerHTML = `
                        Volume:
                        <strong>
                            ${formatNumber(
                                exerciseVolume
                            )} kg
                        </strong>
                    `;

                }

            }
        );


    const totalElement =
        document.getElementById(
            "trainingVolume"
        );


    if (totalElement) {

        totalElement.textContent =
            formatNumber(
                totalVolume
            );

    }

}


/* ================= FINISH WORKOUT ================= */

function finishWorkout() {

    if (!activeWorkout) {
        return;
    }


    let totalVolume = 0;

    let maxWeightThisWorkout = 0;

    let completedExercises = 0;


    activeWorkout.exercises =
        activeWorkout.exercises
            .map(exercise => {

                const cleanSets =
                    exercise.sets.map(set => {

                        const weight =
                            Math.max(
                                0,
                                Number(
                                    set.weight
                                ) || 0
                            );


                        const reps =
                            Math.min(
                                MAX_REPS,
                                Math.max(
                                    0,
                                    Math.floor(
                                        Number(
                                            set.reps
                                        ) || 0
                                    )
                                )
                            );


                        if (
                            weight >
                            maxWeightThisWorkout
                        ) {

                            maxWeightThisWorkout =
                                weight;

                        }


                        totalVolume +=
                            weight * reps;


                        return {

                            weight,

                            reps

                        };

                    });


                const hasCompletedSet =
                    cleanSets.some(
                        set =>
                            set.reps > 0
                    );


                if (hasCompletedSet) {

                    completedExercises++;

                }


                return {

                    ...exercise,

                    sets:
                        cleanSets

                };

            });


    if (
        completedExercises === 0
    ) {

        showToast(
            "Registre pelo menos uma repetição antes de finalizar.",
            "error"
        );

        return;

    }


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    const xpEarned =
        20 +
        completedExercises * 5;


    const historyItem = {

        id:
            Date.now(),

        workoutId:
            activeWorkout.workoutId,

        name:
            activeWorkout.name,

        date:
            today,

        volume:
            totalVolume,

        exercises:
            activeWorkout.exercises,

        xp:
            xpEarned

    };


    data.history.unshift(
        historyItem
    );


    addXP(
        xpEarned
    );


    if (
        maxWeightThisWorkout >
        data.records.maxWeight
    ) {

        data.records.maxWeight =
            maxWeightThisWorkout;

    }


    saveData();


    closeTrainingModal();

    updateAll();


    showToast(
        `Treino concluído! +${xpEarned} XP 🔥`,
        "success"
    );

}


/* ================= LAST WORKOUT ================= */

function renderLastWorkout() {

    const container =
        document.getElementById(
            "lastWorkout"
        );


    if (!data.history.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    Nenhum treino concluído ainda.
                </strong>

                <p>
                    Seu primeiro treino vai aparecer aqui.
                </p>

            </div>

        `;

        return;

    }


    const workout =
        data.history[0];


    container.innerHTML = `

        <div class="workout-card">

            <div class="workout-card-header">

                <div>

                    <span class="section-label">
                        ÚLTIMO TREINO
                    </span>

                    <h3>
                        ${escapeHTML(
                            workout.name
                        )}
                    </h3>

                    <p>
                        ${formatDate(
                            workout.date
                        )}
                    </p>

                </div>

                <strong style="color:#F49D37;">
                    +${workout.xp} XP
                </strong>

            </div>


            <div class="workout-card-footer">

                <small>
                    ${workout.exercises.length}
                    exercícios
                </small>

                <strong>
                    ${formatNumber(
                        workout.volume
                    )} kg
                </strong>

            </div>

        </div>

    `;

}


/* ================= HISTORY ================= */

function renderHistory() {

    const container =
        document.getElementById(
            "historyList"
        );


    if (!data.history.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    Histórico vazio.
                </strong>

                <p>
                    Complete um treino para começar seu histórico.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        data.history
            .map(item => `

                <div class="history-item">

                    <div class="history-main">

                        <div class="history-icon">
                            🏋
                        </div>

                        <div>

                            <h3>
                                ${escapeHTML(
                                    item.name
                                )}
                            </h3>

                            <p>
                                ${formatDate(
                                    item.date
                                )}
                            </p>

                        </div>

                    </div>


                    <div class="history-stats">

                        <div class="history-stat">

                            <span>
                                EXERCÍCIOS
                            </span>

                            <strong>
                                ${item.exercises.length}
                            </strong>

                        </div>


                        <div class="history-stat">

                            <span>
                                VOLUME
                            </span>

                            <strong>
                                ${formatNumber(
                                    item.volume
                                )} kg
                            </strong>

                        </div>


                        <div class="history-stat">

                            <span>
                                XP
                            </span>

                            <strong style="color:#F49D37;">
                                +${item.xp}
                            </strong>

                        </div>

                    </div>

                </div>

            `)
            .join("");

}


/* ================= PROFILE ================= */

function renderProfile() {

    const name =
        data.user.name ||
        "Atleta";


    document
        .getElementById(
            "profileName"
        )
        .textContent =
        name;


    document
        .getElementById(
            "profileAvatar"
        )
        .textContent =
        name
            .charAt(0)
            .toUpperCase();


    document
        .getElementById(
            "profileNameInput"
        )
        .value =
        data.user.name || "";


    document
        .getElementById(
            "profileAgeInput"
        )
        .value =
        data.user.age || "";

}


function saveProfile() {

    const name =
        document
            .getElementById(
                "profileNameInput"
            )
            .value
            .trim();


    const age =
        Number(
            document
                .getElementById(
                    "profileAgeInput"
                )
                .value
        );


    if (!name) {

        showToast(
            "Digite seu nome.",
            "error"
        );

        return;

    }


    if (
        !age ||
        age < 10 ||
        age > 100
    ) {

        showToast(
            "Digite uma idade válida.",
            "error"
        );

        return;

    }


    data.user.name =
        name;


    data.user.age =
        age;


    saveData();

    updateAll();


    showToast(
        "Perfil atualizado!",
        "success"
    );

}


/* ================= UPDATE ALL ================= */

function updateAll() {

    updateDashboard();

    renderWorkouts();

    renderTodayWorkouts();

    renderHistory();

    renderProfile();

}


/* ================= UTILITIES ================= */

function formatNumber(number) {

    return Number(number || 0)
        .toLocaleString(
            "pt-BR",
            {
                maximumFractionDigits: 1
            }
        );

}


function formatDate(dateString) {

    if (!dateString) {
        return "-";
    }


    const date =
        new Date(
            dateString.includes("T")
                ? dateString
                : `${dateString}T12:00:00`
        );


    return date.toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            document
                .querySelectorAll(
                    ".modal.show"
                )
                .forEach(modal => {

                    modal.classList.remove(
                        "show"
                    );

                });


            confirmCallback =
                null;

        }

    }
);


/* ================= SERVICE WORKER ================= */

if (
    "serviceWorker" in navigator
) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("./sw.js")

                .then(() => {

                    console.log(
                        "GYM APP: modo aplicativo ativado!"
                    );

                })

                .catch(error => {

                    console.error(
                        "Erro ao registrar o Service Worker:",
                        error
                    );

                });

        }
    );

}