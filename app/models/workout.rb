class Workout < ApplicationRecord
    validates :name, presence: true
    belongs_to :user

    validates :name, :set_reps, :weight, :user_id, presence: true
end
