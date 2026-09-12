/* =========================================================
   GYM APP V2
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
        "gymAppV2",
        JSON.stringify(data)
    );

}


function loadData() {

    const saved = localStorage.getItem("gymAppV2");

    if (!saved) return;

    try {

        const parsed = JSON.parse(saved);

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

    } catch (error) {

        console.error(
            "Erro ao carregar dados:",
            error
        );

    }

}


/* ================= TOAST ================= */

function showToast(message, type = "info") {

    const toast = document.getElementById("appToast");

    toast.textContent = message;

    toast.className =
        `toast ${type} show`;

    clearTimeout(window.toastTimeout);

    window.toastTimeout = setTimeout(() => {

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

    messageElement.textContent = message;

    confirmCallback = callback;

    modal.classList.add("show");

    okButton.onclick = () => {

        const action = confirmCallback;

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

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    const page =
        document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }


    document.querySelectorAll(".nav-btn")
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


    data.user.name = name;
    data.user.age = age;


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

    const xpForNext =
        level * 100;

    const currentLevelXP =
        data.xp - xpForCurrent;

    const progress =
        Math.min(
            100,
            (currentLevelXP / 100) * 100
        );


    document.getElementById("dashboardName")
        .textContent =
        data.user.name || "Atleta";


    document.getElementById("headerLevel")
        .textContent = level;


    document.getElementById("xpLevel")
        .textContent = level;


    document.getElementById("profileLevel")
        .textContent = level;


    document.getElementById("xpValue")
        .textContent = data.xp;


    document.getElementById("currentXP")
        .textContent = currentLevelXP;


    document.getElementById("nextXP")
        .textContent = 100;


    document.getElementById("xpProgress")
        .style.width =
        `${progress}%`;


    document.getElementById("workoutCount")
        .textContent =
        data.history.length;


    document.getElementById("recordValue")
        .textContent =
        formatNumber(data.records.maxWeight);


    document.getElementById("streakValue")
        .textContent =
        calculateStreak();


    if (progress >= 100) {

        document.getElementById("xpMessage")
            .textContent =
            "🔥 Você subiu de nível!";

    } else {

        document.getElementById("xpMessage")
            .textContent =
            `${100 - currentLevelXP} XP para o próximo nível.`;

    }


    renderLastWorkout();

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


    for (let i = 0; i < dates.length - 1; i++) {

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
        exercises.map(exercise => `

            <label class="exercise-selector">

                <input
                    type="checkbox"
                    value="${exercise.id}"
                    ${selectedSet.has(String(exercise.id))
                        ? "checked"
                        : ""}
                    onchange="updateSelectedExerciseCount()"
                >

                <span>
                    ${exercise.name}
                </span>

            </label>

        `).join("");


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
            `${selected.length} selecionado${selected.length === 1 ? "" : "s"}`;

    }

}


/* ================= WORKOUT MODAL ================= */

function openWorkoutModal(workoutId = null) {

    editingWorkoutId = workoutId;


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
                item => item.id === workoutId
            );


        if (!workout) return;


        title.textContent =
            "EDITAR TREINO";


        document
            .getElementById("workoutName")
            .value =
            workout.name;


        renderWorkoutSelector(
            workout.exercises.map(
                exercise => exercise.id
            )
        );


    } else {

        title.textContent =
            "CRIAR TREINO";


        document
            .getElementById("workoutName")
            .value = "";


        renderWorkoutSelector([]);

    }


    document
        .getElementById("customExerciseForm")
        .classList.add("hidden");


    modal.classList.add("show");

}


function closeWorkoutModal() {

    document
        .getElementById("workoutModal")
        .classList.remove("show");

    editingWorkoutId = null;

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
            .getElementById("customExerciseName")
            .value
            .trim();


    const muscle =
        document
            .getElementById("customExerciseMuscle")
            .value;


    const focus =
        document
            .getElementById("customExerciseFocus")
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


    /* Guarda os exercícios que já estavam marcados */

    const selectedIds =
        [
            ...document.querySelectorAll(
                "#workoutExerciseSelector input:checked"
            )
        ].map(input => input.value);


    const newExercise = {

        id: `custom-${Date.now()}`,

        name,

        muscle,

        focus,

        alternatives: []

    };


    exercises.push(newExercise);


    /* Re-renderiza sem perder os selecionados */

    renderWorkoutSelector([
        ...selectedIds,
        newExercise.id
    ]);


    document
        .getElementById("customExerciseName")
        .value = "";


    document
        .getElementById("customExerciseFocus")
        .value = "";


    document
        .getElementById("customExerciseForm")
        .classList.add("hidden");


    showToast(
        `${name} adicionado ao treino!`,
        "success"
    );

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
                focus: exercise.focus
            };

        });


    if (editingWorkoutId) {

        const workout =
            data.workouts.find(
                item =>
                    item.id === editingWorkoutId
            );


        if (workout) {

            workout.name = name;

            workout.exercises =
                selectedExercises;

        }


        showToast(
            "Treino atualizado!",
            "success"
        );

    } else {

        const newWorkout = {

            id: Date.now(),

            name,

            exercises: selectedExercises,

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
        data.workouts.map(workout => `

            <div class="workout-card">

                <div class="workout-card-header">

                    <div>

                        <span class="section-label">
                            TREINO
                        </span>

                        <h3>
                            ${escapeHTML(workout.name)}
                        </h3>

                        <p>
                            ${workout.exercises.length}
                            exercício${workout.exercises.length === 1 ? "" : "s"}
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


                <div class="workout-exercises">

                    ${workout.exercises
                        .slice(0, 8)
                        .map(exercise => `
                            <span>
                                ${escapeHTML(exercise.name)}
                            </span>
                        `)
                        .join("")}

                    ${
                        workout.exercises.length > 8
                            ? `<span>+${workout.exercises.length - 8}</span>`
                            : ""
                    }

                </div>


                <div class="workout-card-footer">

                    <small>
                        Criado em
                        ${formatDate(workout.createdAt)}
                    </small>

                    <button
                        class="primary-btn"
                        onclick="startWorkout(${workout.id})"
                    >
                        INICIAR →
                    </button>

                </div>

            </div>

        `).join("");

}


/* ================= DELETE WORKOUT ================= */

function deleteWorkout(id) {

    const workout =
        data.workouts.find(
            item => item.id === id
        );


    if (!workout) return;


    showConfirm(
        `Tem certeza que deseja excluir o treino "${workout.name}"?`,
        () => {

            data.workouts =
                data.workouts.filter(
                    item => item.id !== id
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


/* ================= START WORKOUT ================= */

function startWorkout(id) {

    const workout =
        data.workouts.find(
            item => item.id === id
        );


    if (!workout) return;


    activeWorkout = {

        workoutId: workout.id,

        name: workout.name,

        exercises:
            workout.exercises.map(
                exercise => ({
                    ...exercise,
                    weight: 0,
                    reps: 0
                })
            )

    };


    renderTraining();

    document
        .getElementById("trainingModal")
        .classList.add("show");

}


function closeTrainingModal() {

    document
        .getElementById("trainingModal")
        .classList.remove("show");

    activeWorkout = null;

}


/* ================= RENDER TRAINING ================= */

function renderTraining() {

    if (!activeWorkout) return;


    document
        .getElementById("trainingTitle")
        .textContent =
        activeWorkout.name.toUpperCase();


    document
        .getElementById("trainingExerciseCount")
        .textContent =
        activeWorkout.exercises.length;


    const container =
        document.getElementById(
            "trainingExercises"
        );


    container.innerHTML =
        activeWorkout.exercises
            .map((exercise, index) => `

                <div class="training-exercise">

                    <div class="training-exercise-header">

                        <div>

                            <span>
                                ${escapeHTML(exercise.muscle)}
                            </span>

                            <h3>
                                ${escapeHTML(exercise.name)}
                            </h3>

                        </div>

                    </div>


                    <div class="training-inputs">


                        <!-- PESO -->

                        <div>

                            <label class="form-group">

                                <span
                                    style="
                                        display:block;
                                        margin-bottom:7px;
                                        color:#aaa5b8;
                                        font-size:9px;
                                        font-weight:900;
                                    "
                                >
                                    PESO — KG
                                </span>

                            </label>


                            <div class="number-control">

                                <button
                                    onclick="changeNumber(
                                        'weight-${index}',
                                        -1
                                    )"
                                >
                                    −
                                </button>

                                <input
                                    type="number"
                                    min="0"
                                    step="0.5"
                                    value="0"
                                    id="weight-${index}"
                                    oninput="updateTrainingVolume()"
                                >

                                <button
                                    onclick="changeNumber(
                                        'weight-${index}',
                                        1
                                    )"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        <!-- REPS -->

                        <div>

                            <label
                                style="
                                    display:block;
                                    margin-bottom:7px;
                                    color:#aaa5b8;
                                    font-size:9px;
                                    font-weight:900;
                                "
                            >
                                REPETIÇÕES — MÁX. 15
                            </label>


                            <div class="number-control">

                                <button
                                    onclick="changeNumber(
                                        'reps-${index}',
                                        -1
                                    )"
                                >
                                    −
                                </button>

                                <input
                                    type="number"
                                    min="0"
                                    max="15"
                                    step="1"
                                    value="0"
                                    id="reps-${index}"
                                    inputmode="numeric"
                                    oninput="handleRepsInput(
                                        'reps-${index}'
                                    )"
                                >

                                <button
                                    onclick="changeNumber(
                                        'reps-${index}',
                                        1
                                    )"
                                >
                                    +
                                </button>

                            </div>


                            <div
                                id="rep-message-${index}"
                                class="rep-recommendation"
                            ></div>

                        </div>


                    </div>

                </div>

            `).join("");


    updateTrainingVolume();

}


/* ================= NUMBER CONTROLS ================= */

function changeNumber(inputId, amount) {

    const input =
        document.getElementById(inputId);


    if (!input) return;


    let value =
        Number(input.value) || 0;


    value += amount;


    if (value < 0) {
        value = 0;
    }


    if (inputId.startsWith("reps-")) {

        value =
            Math.min(
                15,
                Math.floor(value)
            );

    }


    input.value = value;


    if (inputId.startsWith("reps-")) {

        handleRepsInput(inputId);

    }


    updateTrainingVolume();

}


/* ================= REPS ================= */

function handleRepsInput(inputId) {

    const input =
        document.getElementById(inputId);


    if (!input) return;


    let value =
        Math.floor(
            Number(input.value) || 0
        );


    if (value < 0) {
        value = 0;
    }


    if (value > 15) {

        value = 15;

    }


    input.value = value;


    const index =
        inputId.replace(
            "reps-",
            ""
        );


    const message =
        document.getElementById(
            `rep-message-${index}`
        );


    if (!message) return;


    if (value === 15) {

        message.textContent =
            "🔥 Você chegou ao limite de 15 reps! Considere aumentar o peso.";

        message.classList.add("show");

    } else {

        message.textContent = "";

        message.classList.remove("show");

    }

}


/* ================= TRAINING VOLUME ================= */

function updateTrainingVolume() {

    if (!activeWorkout) return;


    let volume = 0;


    activeWorkout.exercises
        .forEach((exercise, index) => {

            const weight =
                Number(
                    document.getElementById(
                        `weight-${index}`
                    )?.value
                ) || 0;


            const reps =
                Number(
                    document.getElementById(
                        `reps-${index}`
                    )?.value
                ) || 0;


            volume +=
                weight * reps;

        });


    document
        .getElementById("trainingVolume")
        .textContent =
        formatNumber(volume);

}


/* ================= FINISH WORKOUT ================= */

function finishWorkout() {

    if (!activeWorkout) return;


    let totalVolume = 0;

    let maxWeightThisWorkout = 0;

    let completedExercises = 0;


    activeWorkout.exercises =
        activeWorkout.exercises.map(
            (exercise, index) => {

                const weightInput =
                    document.getElementById(
                        `weight-${index}`
                    );


                const repsInput =
                    document.getElementById(
                        `reps-${index}`
                    );


                const weight =
                    Math.max(
                        0,
                        Number(
                            weightInput.value
                        ) || 0
                    );


                const reps =
                    Math.min(
                        15,
                        Math.max(
                            0,
                            Math.floor(
                                Number(
                                    repsInput.value
                                ) || 0
                            )
                        )
                    );


                if (reps > 0) {
                    completedExercises++;
                }


                totalVolume +=
                    weight * reps;


                if (
                    weight >
                    maxWeightThisWorkout
                ) {

                    maxWeightThisWorkout =
                        weight;

                }


                return {
                    ...exercise,
                    weight,
                    reps
                };

            }
        );


    if (completedExercises === 0) {

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

        id: Date.now(),

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


    addXP(xpEarned);


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
                        ${escapeHTML(workout.name)}
                    </h3>

                    <p>
                        ${formatDate(workout.date)}
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
                    ${formatNumber(workout.volume)} kg
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
        data.history.map(item => `

            <div class="history-item">

                <div class="history-main">

                    <div class="history-icon">
                        🏋
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(item.name)}
                        </h3>

                        <p>
                            ${formatDate(item.date)}
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
                            ${formatNumber(item.volume)} kg
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

        `).join("");

}


/* ================= PROFILE ================= */

function renderProfile() {

    const name =
        data.user.name ||
        "Atleta";


    document
        .getElementById("profileName")
        .textContent =
        name;


    document
        .getElementById("profileAvatar")
        .textContent =
        name
            .charAt(0)
            .toUpperCase();


    document
        .getElementById("profileNameInput")
        .value =
        data.user.name || "";


    document
        .getElementById("profileAgeInput")
        .value =
        data.user.age || "";

}


function saveProfile() {

    const name =
        document
            .getElementById("profileNameInput")
            .value
            .trim();


    const age =
        Number(
            document
                .getElementById("profileAgeInput")
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


    data.user.name = name;

    data.user.age = age;


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

    renderHistory();

    renderProfile();

}


/* ================= UTILITIES ================= */

function formatNumber(number) {

    return Number(number || 0)
        .toLocaleString("pt-BR", {
            maximumFractionDigits: 1
        });

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
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal.show")
                .forEach(modal => {

                    modal.classList.remove("show");

                });

            confirmCallback = null;

        }

    }
);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("GYM APP: modo aplicativo ativado!");
            })
            .catch(error => {
                console.error("Erro ao registrar o Service Worker:", error);
            });
    });
}