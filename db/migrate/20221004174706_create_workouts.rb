class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :set_reps
      t.integer :weight
      t.integer :user_id

      t.timestamps
    end
  end
end
