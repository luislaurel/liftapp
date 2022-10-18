user = User.where(email: 'test@company.com', name: 'Dave').first_or_create(password: 'password', password_confirmation: 'password')
workout_seeds = [
    {
        name: 'bench press',
        set_reps: '3x5',
        weight: 155
    },
    {
        name: 'squat',
        set_reps: '3x5',
        weight: 255
    }
]

workout_seeds.each do |workout|
    user.workouts.create(workout)
    p "creating: #{workout}"
  end