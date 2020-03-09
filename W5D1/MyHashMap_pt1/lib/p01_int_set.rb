class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max){false}
    @max = max

  end

  def insert(num)
    if num <= @max && num >= 0
      @store[num] = true
    else 
      raise "Out of bounds"
    end
  end

  def remove(num)
    if num <= @max && num >= 0
      @store[num] = false
    end

  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num if !self.include?(num)
  end

  def remove(num)
    if self[num].include?(num)
      self[num].delete(num)
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    i = num % num_buckets
    # optional but useful; return the bucket corresponding to `num`
    @store[i]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if count == num_buckets
    if !self.include?(num)
      self[num] << num 
      @count += 1
    end

  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    i = num % num_buckets
    @store[i]
  end

  def num_buckets
    @store.length
  end

  def resize!
    size = num_buckets * 2
    new_store = Array.new(size){Array.new}
    @store.each do |bucket|
      bucket.each do |ele|
        idx = ele % size
        new_store[idx] << ele
      end
    end
    @store = new_store
    
  end
end
