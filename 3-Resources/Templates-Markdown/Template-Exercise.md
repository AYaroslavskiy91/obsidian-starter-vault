<%*
let date = tp.date.now('YYYY-MM-DD')

const exercise_list = [
	"Aerobic: Elliptical",
	"Back: 3 Point Row",
	"Back: Back Extension",
	"Back: Chinups",
	"Back: High-row",
	"Back: Lat Pulldown",
	"Back: Low Row",
	"Back: Underhand Eccentric Low Row",
	"Back: Mid-Row",
	"Back: Pullups",
	"Back: T-bar row",
	"Biceps: Bicep Pulldown",
	"Biceps: Twisting Curls",
	"Biceps: Incline DB Curls",
	"Biceps: Alternating Bending Pulldowns",
	"Biceps: Barbell Curl",
	"Biceps: Bicep Curl Machine",
	"Biceps: Concentration Curl",
	"Biceps: Spider Curl",
	"Biceps: Standing Cable Curl",
	"Biceps: TRX Rows",
	"Chest: Benchpress",
	"Chest: Incline Benchpress",
	"Chest: DB Fly",
	"Chest: DB Press",
	"Chest: Decline Press Machine",
	"Chest: Dips",
	"Chest: Dual Axis Incline Press Machine",
	"Chest: Incline DB Press",
	"Chest: Iso-Lateral Bench Press Machine",
	"Chest: Iso-Lateral Incline Bench Press Machine",
	"Chest: Iso-lateral Wide Chest Machine",
	"Chest: Pushups",
	"Chest: Seated Fly",
	"Core: Ab Roller",
	"Core: Alternating Bicycle Crunches",
	"Core: Alternating Scissor Kicks",
	"Core: Alternating Upside-down KB Carry",
	"Core: Anti-extension Deadbug",
	"Core: Bear Crawl Pullthroughs",
	"Core: Crunches",
	"Core: Deadbug",
	"Core: Elbow Plank",
	"Core: Alternating Side Plank",
	"Core: Side Plank to Elbow Plank to Side Plank Rotation (per side)",
	"Core: Hanging Leg Raises",
	"Core: Leg Pushups",
	"Core: Situps",
	"Core: Decline Situps",
	"Core: Trunk Rotations",
	"Forearms: Barbell Forearm Curl",
	"Forearms: Deadhang",
	"Legs: 1/2K Inline Lifts",
	"Legs: Calf Raises",
	"Legs: Getups",
	"Legs: Goblet Squats",
	"Legs: Hip Abduction",
	"Legs: Hip Adduction",
	"Legs: Kettlebel Swings",
	"Legs: Linear Leg Press Machine",
	"Legs: Seated Leg Extensions",
	"Legs: Seated Leg Curls",
	"Legs: Seated Leg Press",
	"Legs: SLDLs",
	"Legs: Split Squats",
	"Legs: Sled Push",
	"Legs: Farmers Carry",
	"Legs: Trap Bar Deadlift",
	"Legs: Deadlift",
	"Legs: Squat Rack",
	"Shoulders: Arnold Press",
	"Shoulders: Bent-over Reverse Fly",
	"Shoulders: DB Shoulder Press",
	"Shoulders: DB Side Raise",
	"Shoulders: Barbell upright row",
	"Shoulders: DB Upright Row",
	"Shoulders: High Pulls",
	"Shoulders: Iso-Lateral Shoulder Press Machine",
	"Shoulders: Lateral Fly",
	"Shoulders: Lateral Raise Machine",
	"Shoulders: Shoulder Press Machine",
	"Shoulders: Seated Shrug Machine",
	"Shoulders: Bent-over Facepulls",
	"Shoulders: Eccentric Constant Tension Lateral Fly",
	"Shoulders: Facedown Incline Facepulls",
	"Shoulders: Overhead Press",
	"Triceps: Tricep Extension Machine",
	"Triceps: Tricep Pulldown",
	"Triceps: Barbell Skullcrusher",
	"Triceps: Seated Barbell Skullcrushers",
	"Triceps: DB overhead extension",
	"Triceps: Tricep Kickback",
	"Triceps: Straight Arm Pulldown",
	"Triceps: JM Press",
	"Triceps: Eccentric French Press"
	]

let exercise = await tp.system.suggester(exercise_list, exercise_list, true, "exercise")

let sets = await tp.system.prompt("sets")
let reps = await tp.system.prompt("reps")
let time = await tp.system.prompt("time")
let weight = await tp.system.prompt("weight")

circuit_type = [
	"1 Warmup",
	"2 Circuit 1",
	"3 Circuit 2",
	"4 Circuit 3",
	"5 Circuit 4",
	"6 Circuit 5",
	"7 Circuit 6"
	]

let type = await tp.system.suggester(circuit_type, circuit_type, true, "circuit")
_%>
<%"---"%>
date_of_workout: <% date %>
exercise: <% "\"" + exercise + "\""%>
sets: <% sets %>
reps: <% reps %>
time: <% time %>
weight: <% weight %>
type: <%"\"" + type + "\""%>
tags: workouts, exercise
<%"---"%>