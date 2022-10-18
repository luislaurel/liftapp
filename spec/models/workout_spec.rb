require 'rails_helper'

RSpec.describe Workout, type: :model do
  let(:user) { User.create email: 'joyce@test.com', name: 'Joyce', password: '123456', password_confirmation: '123456' }

  it'should have a valid name' do
    workout = user.workouts.create(
      set_reps: '3x5',
      weight: 155,
    )

    expect(workout.errors[:name]).to_not be_empty
  end

  it'should have a valid set_reps' do
    workout = user.workouts.create(
      name: 'Joyce',
      weight: 155
    )

    expect(workout.errors[:set_reps]).to_not be_empty
  end

  it'should have a valid weight' do
    workout = user.workouts.create(
      name: 'Luis',
      set_reps: '3x10'
    )

    expect(workout.errors[:weight]).to_not be_empty
  end

end
