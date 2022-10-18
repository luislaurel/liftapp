require 'rails_helper'

RSpec.describe "Workouts", type: :request do
  let(:user) do
    User.create email: 'test@example.com', password: 'password', password_confirmation: 'password'
  end

describe "POST / create" do
      it "creates a workout" do
      workout_params = {
        workout: {
          name: "Bench press",
          set_reps: "5x5",
          weight: 150,
          user_id: user.id,
        }
      }
      post '/workouts', params: workout_params


      json = JSON.parse(response.body).deep_symbolize_keys
      expect(response).to have_http_status(200)
      expect(Workout.count).to eq(1)
      expect(json[:name]).to eq("Bench press")
      expect(json[:set_reps]).to eq("5x5")
    end

    it "doesnt create a workout without a name" do
      workout_params = {
        workout: {
          set_reps: "5x5",
          weight: 150,
          user_id: user.id,
        }
      }
      post '/workouts', params: workout_params

      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    end

    it "doesnt create a workout without a set_reps" do
      workout_params = {
        workout: {
          name: "Bench press",
          weight: 150,
          user_id: user.id,
        }
      }
      post '/workouts', params: workout_params

      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['set_reps']).to include "can't be blank"
    end

    it "doesnt create a workout without a weight" do
      workout_params = {
        workout: {
          name: "Bench press",
          set_reps: '3x5',
          user_id: user.id,
        }
      }
      post '/workouts', params: workout_params

      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['weight']).to include "can't be blank"
    end
  end

  describe "PATCH /update" do
    it "updates an exisiting workout" do
      Workout.create(
        name: 'Power Clean',
        set_reps: '3x5',
        weight: 200,
        user_id: user.id
      )

      workout = Workout.first

      workout_params = {
        workout: {
          name: 'Hang Clean'
        }
      }

      patch "/workouts/#{workout.id}", params: workout_params

      workout = Workout.first

      expect(workout.name).to eq('Hang Clean')
      
    end
  end

  it "updates an exisiting workout" do
    Workout.create(
      name: 'Power Clean',
      set_reps: '3x5',
      weight: 200,
      user_id: user.id
    )

    workout = Workout.first

    workout_params = {
      workout: {
        name: 'Hang Clean',
        set_reps: '4x10',
        weight: 145,
        user_id: user.id
      }
    }

    patch "/workouts/#{workout.id}", params: workout_params

    workout = Workout.first

    expect(response.status).to eq(200)
    
  end

  it "does not update an exisiting workout if weight is blank" do
    Workout.create(
      name: 'Power Clean',
      set_reps: '3x5',
      weight: 200,
      user_id: user.id
    )

    workout = Workout.first

    workout_params = {
      workout: {
        name: 'Hang Clean',
        set_reps: '4x10',
        weight: '',
        user_id: user.id
      }
    }

    patch "/workouts/#{workout.id}", params: workout_params

    workout = Workout.first

    expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['weight']).to include "can't be blank"
    
  end


  it "does not update an exisiting workout if name is blank" do
    Workout.create(
      name: 'Power Clean',
      set_reps: '3x5',
      weight: 200,
      user_id: user.id
    )

    workout = Workout.first

    workout_params = {
      workout: {
        name: '',
        set_reps: '4x10',
        weight: 145,
        user_id: user.id
      }
    }

    patch "/workouts/#{workout.id}", params: workout_params

    workout = Workout.first

    expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    
  end

  it "does not update an exisiting workout if set_reps is blank" do
    Workout.create(
      name: 'Power Clean',
      set_reps: '3x5',
      weight: 200,
      user_id: user.id
    )

    workout = Workout.first

    workout_params = {
      workout: {
        name: 'Hang Clean',
        set_reps: '',
        weight: 145,
        user_id: user.id
      }
    }

    patch "/workouts/#{workout.id}", params: workout_params

    workout = Workout.first

    expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['set_reps']).to include "can't be blank"
    
  end
  describe "DELETE /destroy" do
  it "deletes a workout" do
      Workout.create(
        name: 'Squat',
        set_reps: '10x3',
        weight: 225,
        user_id: user.id
      )
      workout = Workout.first
      delete "/workouts/#{workout.id}"
      expect(response.status).to eq(204)
      workouts = Workout.all
      expect(workouts).to be_empty
    end
  end
    describe "GET /showcard" do
  it "Shows the last workout" do
      sign_in(user)
      Workout.create(
        name: 'Squat',
        set_reps: '10x3',
        weight: 225,
        user_id: user.id
      )
      get "/showcard/"
      expect(response.status).to eq(200)
      json = JSON.parse(response.body).deep_symbolize_keys
      expect(response).to have_http_status(200)
      expect(json[:name]).to eq("Squat")
      expect(json[:set_reps]).to eq("10x3")
    end
  end
end